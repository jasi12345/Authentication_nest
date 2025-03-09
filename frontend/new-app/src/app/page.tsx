"use client";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useState, useEffect } from 'react'

export default function ButtonAppBar() {
   const [isClient, setIsClient] = useState(false)
    useEffect(() => {
      setIsClient(true)
    }, [])
   
    if (!isClient) return <Typography> Prerendered </Typography>;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit" href="signup">SignUp</Button>
          <Button color="inherit" href="Signin">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
