import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  LinearProgress,
  TextField,
} from "@mui/material";

const StudySession: React.FC = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Навчальна сесія
      </Typography>

      {/* Таймер */}
      <Paper elevation={3} sx={{ p: 4, textAlign: "center", mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Час, що залишився:
        </Typography>
        <Typography variant="h2" color="primary">
          25:00
        </Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Почати
          </Button>
          <Button variant="outlined" color="secondary">
            Пауза
          </Button>
        </Box>
      </Paper>

      {/* Прогрес */}
      <Box mb={4}>
        <Typography variant="subtitle1" gutterBottom>
          Прогрес сесії:
        </Typography>
        <LinearProgress variant="determinate" value={40} />
      </Box>

      {/* Нотатки */}
      <Box mb={4}>
        <Typography variant="subtitle1" gutterBottom>
          Нотатки:
        </Typography>
        <TextField
          fullWidth
          multiline
          minRows={4}
          placeholder="Запиши ключові ідеї або завдання..."
        />
      </Box>

      {/* Завершити */}
      <Box textAlign="right">
        <Button variant="contained" color="success">
          Завершити сесію
        </Button>
      </Box>
    </Box>
  );
};

export default StudySession;
