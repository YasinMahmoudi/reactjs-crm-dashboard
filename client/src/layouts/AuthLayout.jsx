import Box from '@mui/material/Box';

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
