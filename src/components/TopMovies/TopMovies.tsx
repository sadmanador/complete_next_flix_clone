import { getMovie } from "@/utils/apiService";
import handleAddToLocalStorage, {
  handleRemoveFromLocalStorage,
} from "@/utils/localStorage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Media, MediaItem, TopMoviesProps, Video } from "../../types";
import { Add, Dislike, Down, Like, Play, Tick } from "../../utils/icons";
import Button from "../Button/Button";
import { Box, Typography } from "@mui/material";

const TopMovies = ({
  item,
  removeMovie,
}: TopMoviesProps): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const { setModalData, setIsModal } = useContext(ModalContext);
  const { title, poster_path, vote_average, id } = item;
  const [isMounted, setIsMounted] = useState(false);
  const [, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isInLocalStorage, setIsInLocalStorage] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const existingItems: MediaItem[] = JSON.parse(
      localStorage.getItem("favoriteItems") || "[]"
    );
    setIsInLocalStorage(
      existingItems.some((existingItem) => existingItem.id === id)
    );
  }, [id]);

  const mediaType = title ? "movie" : "tv";

  const handlePlayClick = () => {
    if (item?.id && isMounted) {
      router.push(`/${mediaType}/${item.id}`);
    }
  };

  const handleFavoriteToggle = () => {
    const mediaItem: MediaItem = { id, type: mediaType, title };
    if (isInLocalStorage) {
      handleRemoveFromLocalStorage(mediaItem);
      setIsInLocalStorage(false);
      removeMovie(mediaItem.id);
    } else {
      handleAddToLocalStorage(mediaItem);
      setIsInLocalStorage(true);
    }
  };

  const image = `https://image.tmdb.org/t/p/original${poster_path}`;

  const onClickModal = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  const fetchTrailer = async () => {
    const res = await getMovie(`/movie/${id}/videos`);
    if (res.error) {
      setError(res.error.message);
      console.log(error);
    } else {
      const trailer = (res.data?.results as unknown as Video[]).find(
        (video) => video.type === "Trailer"
      );
      setTrailerKey(trailer ? trailer.key : null);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isHovered) fetchTrailer();
  }, [isHovered]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "14rem",
        height: "9rem",
      
        borderRadius: "0.28rem",
        marginRight: "0.3rem",
        cursor: "pointer",
        transition: "all 300ms ease",
        "&:hover": {
          transform: "scale(1.45)",
          boxShadow:
            "0 0 1rem rgba(0, 0, 0, 0.6), 0 6px 6px rgba(0, 0, 0, 0.5)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && trailerKey ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "100%", borderRadius: "0.28rem" }}
        ></iframe>
      ) : (
        <Image
          src={image}
          alt="Top movie poster"
          width={450}
          height={350}
          style={{
            borderRadius: "0.28rem",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <Box
        sx={{
          display: isHovered ? "flex" : "none",
          flexDirection: "column",
          backgroundColor: "#252525",
          borderRadius: "0 0 0.28rem 0.28rem",
          p: "0.4rem",
          fontSize: "inherit",
          zIndex: "10"
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button Icon={Play} rounded filled onClick={handlePlayClick} />
          <Button
            Icon={isInLocalStorage ? Tick : Add}
            rounded
            onClick={handleFavoriteToggle}
          />
          <Button Icon={Like} rounded />
          <Button Icon={Dislike} rounded />
          <Button Icon={Down} rounded onClick={() => onClickModal(item)} />
        </Box>
        <Typography
          component="strong"
          sx={{ color: "white", fontSize: "16px", mt: 1 }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
          <Typography
            sx={{
              color: "success.main",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >{`${Math.round(vote_average * 10)}% match`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TopMovies;
