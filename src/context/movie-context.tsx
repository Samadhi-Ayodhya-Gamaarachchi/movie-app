import React, { createContext, ReactNode, useReducer } from "react";
import { movieData, movieDataType } from "../assets/data";

interface MovieContextProps {
  children: ReactNode;
}

interface MovieState {
  movies: movieDataType[];
}

interface MovieAction {
  type: string;
  id: string;
}

const MovieList:movieDataType[]=movieData;

const initialMovieState:MovieState={
   movies:MovieList,

}

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "TOGGLE_BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.id ? { ...movie, isBookmarked: !movie.isBookmarked } : movie
        ),
      };
    default:
      return state;
  }
};

export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({
  state: initialMovieState,
  dispatch: () => {},
});

export const MovieProvider = ({ children }: MovieContextProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
