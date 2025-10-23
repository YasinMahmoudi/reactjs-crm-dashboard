import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const style = {
  width: ' min(90% , 30rem)',
  minHeight: '450px',
  backgroundColor: '',
  color: '#fff',
  marginInline: 'auto',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  boxShadow: '2px 2px 4px rgba(0,0,0,.2)',
  padding: 'max(1.5rem , 2vw)',
};

const titleStyle = {
  color: '#141414',
  fontWeight: '700',
  marginBottom: '30px',
};

export default function AuthBox({ children, title }) {
  return (
    <Box sx={style}>
      <Typography
        variant="h4"
        sx={titleStyle}>
        {title}
      </Typography>

      {children}
    </Box>
  );
}
