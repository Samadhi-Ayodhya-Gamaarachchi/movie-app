import { useContext } from "react";
import { movieDataType } from "../../assets/data"
import { Card, CardContent } from "@mui/material";
import { MovieContext } from "../../context/movie-context";

interface movieTrendCardProps{
    movie:movieDataType;
}

function MovieTrendCard({movie}:movieTrendCardProps) {
    const { dispatch } = useContext(MovieContext);

  return (
    <Card elevation={0} style={{ backgroundColor: "transparent" }}>
    <CardContent style={{ padding: 0, position: "relative", display: "flex" }}>
      <img
        src={movie.image}
        alt=""
        style={{ width: "400px", height: "300px", borderRadius: "8px" }}
      />
    </CardContent>
  </Card>
  )
}

export default MovieTrendCard
