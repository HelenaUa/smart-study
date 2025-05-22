import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./pages/Dashboard/Dashboard";
import StudySession from "./pages/StudySession/StudySession";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./views/MainLayout";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/study" element={<StudySession />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
