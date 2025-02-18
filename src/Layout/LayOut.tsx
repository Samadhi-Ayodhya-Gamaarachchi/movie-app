import { Box } from "@mui/material";
import  { ReactNode } from "react";

import SideBar from "../components/sidebar/SideBar";

interface LayOutProps{
    children:ReactNode
}


function LayOut({children}:LayOutProps) {
  return (
    <div>
      <Box sx={{
        backgroundColor:"#0c0e31",
        display:"flex",
        flexDirection:{
            xs:"column",
            lg:"row"
        },
        color:"white",
        padding:3,
        gap:3,
        overflowY:"hidden",
        height:"100vh"
      }}>

        <SideBar/>
        <Box sx={{
            width:"100%",
            overflowY:"scroll"
        }}>{children} </Box>

      </Box>
    </div>
  )
}

export default LayOut
