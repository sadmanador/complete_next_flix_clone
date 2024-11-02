"use client";
import Cards from "@/components/Cards/Cards";
import { Media } from "@/types";
import { getMovie } from "@/utils/apiService";
import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const MoviePage: React.FC = () => {
  const [movies, setMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMovies = async () => {
    const res = await getMovie("/movie/top_rated?language=en-US&page=1");
    if (res.error) {
      setError(res.error.message);
    } else {
      setMovies(res.data?.results || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        p={2}
        sx={{
          textTransform: "capitalize",
          marginTop: { xs: 0, sm: 2 },
          backgroundColor: "#141414",
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
          <Box display="flex" justifyContent="center">
            <CircularProgress color="inherit" />
          </Box>
        ) : error ? (
          <Typography color="red">{error}</Typography>
        ) : (
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            {movies
              .filter((movie) => movie.poster_path !== null)
              .map((movie) => (
                <Cards key={movie.id} item={movie} enableGenres={false} />
              ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default MoviePage;
