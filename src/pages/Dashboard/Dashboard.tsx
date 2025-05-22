import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Dashboard = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Привіт 👋
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Ласкаво просимо до SmartStudy. Почнемо навчання?
      </Typography>

      <Grid container spacing={3} mt={2}>
        <Grid>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <SchoolIcon fontSize="small" /> Всього сесій
              </Typography>
              <Typography variant="h4">12</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid >
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <AccessTimeIcon fontSize="small" /> Навчено годин
              </Typography>
              <Typography variant="h4">24</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid >
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <EmojiEventsIcon fontSize="small" /> Досягнення
              </Typography>
              <Typography variant="h4">5</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Швидкий старт
        </Typography>
        <Button variant="contained" color="primary" href="/study">
          Почати нову сесію
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
