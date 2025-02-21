import { Box, InputAdornment, InputBase, Paper, Typography } from '@mui/material';
import LayOut from '../../Layout/LayOut';
import { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";

function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <LayOut>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 1, // Use numeric values for borderRadius in MUI
            p: 1,
            backgroundColor: "#191f45",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for movies"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (<Box width="100%">
          <Box width="100%">
          <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Trending
            </Typography>
            <MovieTrendList trendingList={trendingList} />

            {/* Recommended Section */}
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Recommended For You
            </Typography>
            <MovieList recommendedList={recommendedList} />

          </Box>
          </Box>):(
        <Box width="100%">
          <Typography>Found</Typography>
          </Box>

        ) }

      </Box>

      
      <Box py={2} px={4}>
        {search !== "" && (
          <Box width="100%" sx={{ color: "white" }}>
            <Typography variant='h6' >Showing results for "{search}"</Typography>
            
          </Box>
        )}
      </Box>
    </LayOut>
  );
}

export default Home;
