import { getMovie } from "@/utils/apiService";
import handleAddToLocalStorage, {
  handleRemoveFromLocalStorage,
  isItemInLocalStorage,
} from "@/utils/localStorage";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { CardsProps, Genre, Media, MediaItem, Video } from "../../types";
import { Add, Down, Like, Mute, Play, Tick, Unmute } from "../../utils/icons";
import Button from "../Button/Button";
import RenderGenre from "../RenderGenre/RenderGenre";

const Cards = ({
  item,
  enableGenres,
  removeMovie,
}: CardsProps): React.ReactElement => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isInLocalStorage, setIsInLocalStorage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const router = useRouter();
  const { title, vote_average, genre_ids, id, backdrop_path } = item;
  const { setModalData, setIsModal } = useContext(ModalContext);
  const image = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  useEffect(() => {
    setIsMounted(true);
    setIsInLocalStorage(
      isItemInLocalStorage(item.id, item.title ? "movie" : "tv")
    );
    if (enableGenres) {
      setGenres(item.genres);
    }
  }, [item, enableGenres]);

  const handlePlayClick = () => {
    if (item?.id && isMounted) {
      router.push(`/movie/${item.id}`);
    }
  };

  const onClickModal = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  const fetchTrailer = async () => {
    const res = await getMovie(`/movie/${id}/videos`);
    if (res.error) {
      setError(res.error.message);
    } else {
      const trailer = (res.data?.results as unknown as Video[]).find(
        (video) => video.type === "Trailer"
      );
      setTrailerKey(trailer ? trailer.key : null);
    }
  };

  useEffect(() => {
    if (isHovered) {
      fetchTrailer();
    }
  }, [isHovered]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleFavoriteToggle = () => {
    const mediaItem: MediaItem = { id, title };
    if (isInLocalStorage) {
      handleRemoveFromLocalStorage(mediaItem);
      setIsInLocalStorage(false);
      removeMovie(mediaItem.id);
    } else {
      handleAddToLocalStorage(mediaItem);
      setIsInLocalStorage(true);
    }
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        width: "14rem",
        height: "9rem",
        borderRadius: "0.28rem",
        marginRight: "0.3rem",
        cursor: "pointer",
        transition: "all 300ms ease",
        backgroundColor: "#252525",
        zIndex: isHovered ? 10 : 1,
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
        <Box sx={{ position: "relative" }}>
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${
              isMuted ? 1 : 0
            }&controls=0&modestbranding=1&showinfo=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", borderRadius: "0.28rem" }}
          ></iframe>
          <Box
            sx={{
              position: "absolute",
              zIndex: "11",
              bottom: "10%",
              right: "5%",
            }}
          >
            <Button
              Icon={isMuted ? Mute : Unmute}
              rounded
              onClick={toggleMute}
            />
          </Box>
        </Box>
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
            objectPosition: "top",
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
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <Button Icon={Play} rounded onClick={handlePlayClick} />
            <Button
              Icon={isInLocalStorage ? Tick : Add}
              rounded
              onClick={handleFavoriteToggle}
            />
            <Button Icon={Like} rounded />
          </Box>

          <Button Icon={Down} rounded onClick={() => onClickModal(item)} />
        </Box>
        <Box>
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

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {enableGenres ? (
              <Typography sx={{ fontSize: "12px" }}>
                {genres.slice(0, 5).map(({ name }, index) => (
                  <span key={name}>
                    {name}
                    {index < genres.length - 1 && <span> &bull; </span>}
                  </span>
                ))}
              </Typography>
            ) : (
              <RenderGenre genreIds={genre_ids} />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
