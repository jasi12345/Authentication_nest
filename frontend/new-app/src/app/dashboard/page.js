"use client";
import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007FFF",
      dark: "#0066CC",
    },
  },
});

export default function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Navigation Bar */}
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            <Button color="inherit" href="/Signin">SignOut</Button>
            
          </Toolbar>
        </AppBar>

       
        <Box
          sx={{
            height: "90vh", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center", 
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to the Dashboard
          </Typography>
          <Typography variant="subtitle1">
            Your authorization success.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
