"use client";

import Cards from "@/components/Cards/Cards";
import { Media } from "@/types";
import { getMovie } from "@/utils/apiService";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Create a loading fallback component
const LoadingFallback = () => (
  <Box display="flex" justifyContent="center">
    <CircularProgress color="inherit" />
  </Box>
);

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [movies, setMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadMovies = async () => {
    if (query) {
      setLoading(true);
      try {
        const res = await getMovie(
          `/search/movie?query=${encodeURIComponent(query)}`
        );

        if (res.error) {
          throw new Error(res.error.message);
        }

        setMovies(res.data?.results || []);
      } catch (err) {
        const errorMessage = (err as Error).message || "Failed to fetch movies";
        setError(errorMessage);
        console.error("Error from search page: ", errorMessage);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadMovies();
  }, [query]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        p={2}
        bgcolor="black"
        sx={{
          textTransform: "capitalize",
          marginTop: { xs: 0, sm: 2 },
        }}
      >
        <Typography
          component="strong"
          sx={{
            fontSize: "1.2rem",
            marginLeft: "3rem",
            padding: "0.5rem 0",
            width: "fit-content",
            zIndex: 1,
            marginBottom: ".85rem",
          }}
        >
          Top Rated Movies
        </Typography>
        {loading ? (
          <LoadingFallback />
        ) : error ? (
          <Typography color="red">{error}</Typography>
        ) : (
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            {movies
              .filter(
                (movie) =>
                  movie.poster_path !== null && movie.backdrop_path !== null
              )
              .map((movie) => (
                <Cards key={movie.id} item={movie} enableGenres={false} />
              ))}
          </Box>
        )}
      </Box>
    </>
  );
};

// Wrap SearchPage in Suspense in the parent component or in the route
export default function PageWrapper() {
  return (
    <React.Suspense fallback={<LoadingFallback />}>
      <SearchPage />
    </React.Suspense>
  );
}
