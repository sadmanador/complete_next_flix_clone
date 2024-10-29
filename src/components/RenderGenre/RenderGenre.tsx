import React from "react";
import GenreLibrary from "@/utils/genre_id";
import { Box, Typography } from "@mui/material";

interface RenderGenreProps {
  genreIds: number[];
}

const RenderGenre: React.FC<RenderGenreProps> = ({ genreIds }) => {
  // Get the names of the genres based on genreIds
  const genreNames = genreIds
    .map((id) => GenreLibrary.find((genre) => genre.id === id)?.name)
    .filter((name): name is string => name !== undefined); // Filter out any undefined values

  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <Typography sx={{ fontSize: "12px" }}>
        {genreNames.join(" • ")} {/* Using the bullet character for separation */}
      </Typography>
    </Box>
  );
};

export default RenderGenre;
