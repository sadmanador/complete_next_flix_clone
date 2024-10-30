import { Media, SimilarMediaProps } from "@/types";
import { getMovie } from "@/utils/apiService";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SimilarMediaCard from "../SimilarMediaCard/SimilarMediaCard";

const SimilarMedia = ({ id }: SimilarMediaProps) => {
  const [similarMovies, setSimilarMovies] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSimilarMovies = async () => {
    const res = await getMovie(`/movie/${id}/similar`);
    if (res.error) {
      setError(res.error.message);
    } else {
      setSimilarMovies(res.data?.results || []);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSimilarMovies();
  }, []);

  if (loading) {
    return <Typography>Loading similar movies...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <Box sx={{ padding: 2, overflowX: "auto", }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {xs: "1fr", md:"repeat(2, 3fr)"},
          gap: "12px",
        }}
      >
        {similarMovies.length > 0 ? (
          similarMovies
            .filter((movie) => movie.poster_path)
            .map((item) => <SimilarMediaCard key={item.id} item={item} />)
        ) : (
          <Typography>No similar movies found.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SimilarMedia;
