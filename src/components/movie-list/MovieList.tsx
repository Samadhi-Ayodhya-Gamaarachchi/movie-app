import { Box, Paper } from "@mui/material";
import { movieDataType } from "../../assets/data";
import MovieCard from "../movie-card/MovieCard";

interface MovieListProps {
  recommendedList: movieDataType[];
}

function MovieList({ recommendedList }: MovieListProps) {
  console.log("The recommendedList is:", recommendedList);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "auto", // Enables horizontal scrolling
        scrollbarWidth: "none", // Hides scrollbar in Firefox
        "&::-webkit-scrollbar": { display: "none" }, // Hides scrollbar in Chrome/Safari
        padding: "10px",
      }}
    >
      {recommendedList.map((movie) => (
        <Paper
          key={movie.id}
          elevation={3}
          sx={{
            minWidth: "200px", // Ensures the card is scrollable
            backgroundColor: "#1E1E1E",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <MovieCard movie={movie} />
        </Paper>
      ))}
    </Box>
  );
}

export default MovieList;
