import { Box, Grid, Paper } from "@mui/material";
import { movieDataType } from "../../assets/data";
interface MovieListProps{
    recommendedList : movieDataType;
}

function MovieList({recommendedList}: MovieListProps) {
  console.log("The recommendedList is:",recommendedList)
  return (
    <div>
      <Box sx={{display:"flex",gap:2,overflowX:"scroll"}}>
      {recommendedList.map((movie)=>{
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{backgroundColor:"transparent"}}>
            <MovieCard movie={movie}/>
          </Paper>
        </Grid>
      })}
    </Box>
    </div>
  )
}

export default MovieList
