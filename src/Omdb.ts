export type OmdbResponse = {
  Search: Movie[];
  Response: string;
  totalResults: string;
};

export type Movie = {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
};
