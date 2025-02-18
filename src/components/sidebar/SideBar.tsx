import HomeIcon from "@mui/icons-material/Home";
import Movies from "@mui/icons-material/Movie";
import BookMarkIcon from "@mui/icons-material/Bookmark";
import { Link, useLocation } from "react-router-dom";
import { Box, Hidden, Typography } from "@mui/material";
import "@fontsource/bebas-neue";

const navLinks = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    name: "Movies",
    icon: <Movies />,
    link: "/movies",
  },
  {
    name: "BookMark",
    icon: <BookMarkIcon />,
    link: "/bookmark",
  },
];

function SideBar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Box
      sx={{
        backgroundColor: "#191f45",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Box sx={{ my: 2 }}>
            <img
              src="/images/logo.png"
              alt="Show App Logo"
              style={{ width: "200px", height: "auto" }}
            />
          </Box>
        </Hidden>

        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link key={item.name} to={item.link} style={{ textDecoration: "none" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {item.icon}
                <Hidden mdDown>
                  <Typography sx={{ color: "#fff", fontFamily: "Bebas Neue, sans-serif" }}>
                    {item.name}
                  </Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
