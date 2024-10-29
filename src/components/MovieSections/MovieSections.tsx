import Cards from "@/components/Cards/Cards";
import { Media, MovieSectionProps } from "@/types";
import { getMovie } from "@/utils/apiService";
import { Next, Previous } from "@/utils/icons";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const MovieSections: React.FC<MovieSectionProps> = ({
  heading,
  endpoint,
}) => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const fetchMovies = async () => {
    const res = await getMovie(`${endpoint}`);
    if (res.error) {
      setError(res.error.message);
    } else {
      setMedia(res.data?.results || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [endpoint]);

  const scrollRight = (event: React.MouseEvent<HTMLButtonElement>) => {
    const scrollContainer =
      event.currentTarget.parentNode?.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = (event: React.MouseEvent<HTMLButtonElement>) => {
    const scrollContainer =
      event.currentTarget.parentNode?.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // New function to handle scroll event and update isScrolled state
  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const scrollLeft = (event.target as HTMLElement).scrollLeft;
    setIsScrolled(scrollLeft > 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textTransform: "capitalize",
        marginTop: { xs: 0, sm: "-9rem" },
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
        {heading}
      </Typography>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Box
          sx={{ display: "flex", alignItems: "center", position: "relative" }}
        >
          {!isScrolled ? null : ( // Hide left button when at the start of scroll
            <Button
              onClick={scrollLeft}
              sx={{
                color: "white",
                position: "absolute",
                left: "0",
                top: "0",
                zIndex: "100",
                backgroundColor: "rgba(0,0,0,.5)",
                padding: "3.7rem 1rem",
                fontSize: "2rem",
              }}
            >
              <Previous />
            </Button>
          )}
          <Box
            className="scroll-container"
            onScroll={handleScroll} // Attach onScroll handler
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: { xs: "3.2rem 6rem 2.2rem", sm: "3.2rem 6rem 12.5rem" },
              overflowX: "auto",
              marginTop: "-3rem",
              marginLeft: "-3rem",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {media
              ?.filter(
                (item) =>
                  item.poster_path !== null && item.backdrop_path !== null
              )
              .map((item, index) => (
                <Cards key={index} item={item} />
              ))}
          </Box>
          <Button
            onClick={scrollRight}
            sx={{
              color: "white",
              position: "absolute",
              right: "0",
              top: "0",
              zIndex: "100",
              backgroundColor: "rgba(0,0,0,.5)",
              padding: "3.7rem 1rem",
              fontSize: "2rem",
            }}
          >
            <Next />
          </Button>
        </Box>
      )}
    </Box>
  );
};
