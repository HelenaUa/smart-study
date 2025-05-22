import React from 'react';
// import { useEffect } from 'react';
// import { Outlet, useLocation } from 'react-router';
import { Stack } from '@mui/material';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Stack direction="row" width="100vw">
      {children}
    </Stack>
  );
};

export default MainLayout;
