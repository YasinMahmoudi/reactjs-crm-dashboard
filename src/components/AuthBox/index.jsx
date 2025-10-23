import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ModeToggle from '../ModeToggle';

const titleStyle = {
  // color: '#141414',
  fontWeight: '700',
  marginBottom: '30px',
};

export default function AuthBox({ children, title }) {
  return (
    <Box
      sx={[
        (theme) => ({
          width: ' min(90% , 30rem)',
          minHeight: '450px',
          backgroundColor: '',
          color: '#141414',
          marginInline: 'auto',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          border: '1px solid #e3e3e3',
          boxShadow: theme.shadows[1],
          padding: 'max(1.5rem , 2vw)',
        }),
        (theme) =>
          theme.applyStyles('dark', {
            boxShadow: theme.shadows[24],
            border: '1px solid #323232',
            color: '#f1f1f1',
          }),
      ]}>
      <ModeToggle />
      <Typography
        variant="h4"
        sx={titleStyle}>
        {title}
      </Typography>

      {children}
    </Box>
  );
}
