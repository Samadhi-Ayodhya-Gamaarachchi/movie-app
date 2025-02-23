import { Box, Grid, Paper } from "@mui/material";
import { movieDataType } from "../../assets/data";
import MovieTrendCard from "../movie-card/MovieTrendCard";

interface MovieTrendListProps {
  trendingList: movieDataType[];  // ✅ Make sure it's an array
}

function MovieTrendList({ trendingList }: MovieTrendListProps) {
  console.log("The trendingList is:", trendingList);

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
  {trendingList.map((movie) => (
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
      <MovieTrendCard movie={movie} />
    </Paper>
  ))}
</Box>

  );
}

export default MovieTrendList;
