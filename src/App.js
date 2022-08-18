import React, { useState } from "react";
import { Feed } from "./component/Feed";
import { Rightbar } from "./component/Rightbar";
import { Slidebar } from "./component/Slidebar";
import {Box, createTheme} from "@mui/material";
import { Container, Stack } from "@mui/system";
import { Navbar } from "./component/Navbar";
import Add from "./component/Add";
import { dark, light } from "@mui/material/styles/createPalette";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode,setMode] = useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
       <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent = "space-between">
      <Slidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      
  </Stack>
  <Add/>
  </Box>
    </ThemeProvider>
 
  );
    
 
}

export default App;
