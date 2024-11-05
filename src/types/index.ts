import { AxiosRequestConfig, AxiosResponse } from "axios";
import { MutableRefObject } from "react";
import { IconType } from "react-icons";

export type Maybe<T> = T | null;
export type ImageType = "poster" | "original";

export interface SliderButtonProps {
  isRight: boolean;
}

export interface DialogProps {
  visible: boolean;
  classname?: string;
  onClose: () => void;
  dialogRef: MutableRefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

export interface ButtonProps {
  filled?: boolean;
  label?: string;
  Icon: IconType;
  rounded?: boolean;
  onClick?: () => void;
  hidden?: boolean;
}
export interface CardsProps {
  defaultCard?: boolean;
  removeMovie?: (id: number) => void;
  item: Media;
  mediaType?: string;
  enableGenres?: boolean;
}

export enum MediaType {
  MOVIE = "movie",
  TV = "tv",
}

export interface Genre {
  id: number;
  name: string;
}

export interface Media {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  key?: string;
  type?: string;
  genres?: Genre[];
}

export interface MoviesResponse {
  page: number;
  total_results: number;
  total_pages: number;
  genres?: [];
  results: Media[];
}

export interface Section {
  heading: string;
  endpoint: string;
  defaultCard?: boolean;
  topList?: boolean;
}

export interface Video {
  id: string;
  key: string;
  type: string;
  name: string;
  site: string;
}

export interface MediaItem {
  id: number;
  type: "movie" | "tv";
  title: string;
}

export interface FeatureCardProps {
  index: number;
  item: Media;
  mediaType: string;
}

export interface ChildrenProvider {
  children: React.ReactNode;
}

export interface MovieSectionProps {
  defaultCard?: boolean;
  heading: string;
  topList?: boolean;
  endpoint: string;
  mediaType?: string;
}

export interface NavbarProps {
  isScrolled: boolean;
}

export interface SimilarMediaProps {
  id: number;
}

export interface TopMoviesProps {
  item: Media;
  removeMovie: (id: number) => void;
}

export interface ModalProps {
  modalData: Media;
  modalOpen: boolean;
  enableGenres: boolean;
  handleClose: () => void;
}

export interface AudioControl {
  mute: () => void;
  unMute: () => void;
}

export interface RenderGenreProps {
  genreIds: number[];
}

export interface AxiosErrorType {
  code?: string;
  config: AxiosRequestConfig;
  message: string;
  name: string;
  request?: XMLHttpRequest;
  response?: AxiosResponse;
  status?: number;
  stack?: string;
}

export interface RequestError extends Error {
  status?: number;
  details?: unknown;
}

export interface ApiResponse<T> {
  data?: T;
  error?: RequestError | undefined;
}

export interface SpinnerContextProps {
  loading: boolean; 
  setLoading: (loading: boolean) => void; 
  error: string | null; 
  setError: (error: string | null) => void;
}
