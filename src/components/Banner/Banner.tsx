import { getMovie } from "@/utils/apiService";
import {
  Box,
  IconButton,
  Button as MuiButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Media } from "../../types";
import { Info, Mute, Play, Unmute } from "../../utils/icons";
import { useEffect, useState } from "react";
import ModalComp from "../Modal/Modal";

const Banner: React.FC = () => {
  const [media, setMedia] = useState<Media | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const router = useRouter();

  const handlePlayClick = () => {
    if (media?.id) {
      router.push(`/movie/${media.id}`);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const loadMedia = async () => {
    const result = await getMovie("/movie/top_rated?language=en-US&page=1");

    if (result && result.data && result.data.results) {
      const randomIndex = Math.floor(
        Math.random() * result.data.results.length
      );
      const selectedMedia: Media = result.data.results[randomIndex];
      setMedia(selectedMedia);

      const trailerResponse = await getMovie(
        `/movie/${selectedMedia.id}/videos`
      );

      if (
        trailerResponse &&
        trailerResponse.data &&
        Array.isArray(trailerResponse.data.results)
      ) {
        const videos = trailerResponse.data.results;
        const trailer = videos.find((video) => video.type === "Trailer");
        setTrailerKey(trailer?.key || null);
      }
    } else {
      console.error("No data found in the response");
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        {trailerKey ? (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingBottom: "56.25%",
              overflow: "hidden",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${
                isMuted ? 1 : 0
              }&controls=0&loop=1&modestbranding=1&showinfo=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
              allowFullScreen
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100%",
                height: "100%",
                transform: "translate(-50%, -50%) scale(1.2)", // Scale to fill without bars
                border: "none",
                display: "block",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "15%",
                inset: 0,
                backgroundImage: "linear-gradient(to top, black, transparent)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "30%",
                right: "0",
              }}
            >
              <IconButton
                sx={{
                  marginRight: "10px",
                  border: "2px solid white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  },
                }}
                onClick={toggleMute}
              >
                {isMuted ? <Mute /> : <Unmute />}
              </IconButton>
              <MuiButton
                sx={{
                  borderLeft: "2px solid white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  fontSize: "16px",
                  padding: ".5rem 3rem .5rem .5rem",
                  borderRadius: "0",
                }}
              >
                18+
              </MuiButton>
            </Box>
          </Box>
        ) : (
          media && (
            <Image
              width={1280}
              height={720}
              src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
              alt="spotlight"
            />
          )
        )}
        <Box
          sx={{
            zIndex: 1,
            position: "absolute",
            bottom: { xs: "1rem", md: "15%" },
            width: { xs: "75%", md: "35%" },
            marginLeft: { xs: 0, md: "3.5rem" },
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-end" },
            textAlign: { xs: "center", md: "left" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              padding: "0.4rem",
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.8rem" },
            }}
          >
            {media?.title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              padding: "0.3rem",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontSize: { xs: "0.9rem", md: "1.3rem" },
            }}
          >
            {media?.overview?.slice(0, 100) + "..." ||
              "No description available."}
          </Typography>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              flexDirection: "row",
              gap: "10px",
              margin: "0.3rem 0",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <MuiButton
              variant="contained"
              onClick={handlePlayClick}
              startIcon={<Play />}
              sx={{
                color: "black",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            >
              Play
            </MuiButton>
            {media && (
              <MuiButton
                onClick={handleOpen}
                variant="outlined"
                startIcon={<Info />}
                sx={{
                  color: "white",
                  backgroundColor: "transparent",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                More Info
              </MuiButton>
            )}
          </Box>
        </Box>
      </Box>

      {media && (
        <ModalComp
          modalOpen={modalOpen}
          handleClose={handleClose}
          modalData={media}
          enableGenres={false}
        />
      )}
    </>
  );
};

export default Banner;
