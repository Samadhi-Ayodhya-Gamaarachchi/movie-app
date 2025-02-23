import { Box, Grid, Paper } from "@mui/material";
import { movieDataType } from "../../assets/data";

interface MovieTrendListProps{
    trendingList : movieDataType;
}

function MovieTrendList({trendingList}:MovieTrendListProps) {
  console.log("The trendingList   is:",trendingList)
  return (
    <Box sx={{display:"flex",gap:2,overflowX:"scroll"}}>
      {trendingList.map((movie)=>{
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{backgroundColor:"transparent"}}>
            <MovieTrendCard movie={movie}/>
          </Paper>
        </Grid>
      })}
    </Box>
  )
}

export default MovieTrendList

