import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <div className="container">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Mon Super Menu</Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero Section */}
        <div className="container">
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              My Photo Gallery
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              vitae aperiam! Excepturi repudiandae accusamus, aliquid distinctio
              autem consequuntur ipsam quisquam.
            </Typography>

            {/* Buttons */}
            <div className="buttons">
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See more photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Follow Me
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
};

export default Home;
