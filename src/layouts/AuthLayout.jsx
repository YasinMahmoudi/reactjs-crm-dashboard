import Box from '@mui/material/Box';

/* eslint-disable react/prop-types */
export default function AuthLayout({ children }) {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        height: '100dvh',
      }}>
      {children}
    </Box>
  );
}
