import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material';

export default function Login() {
  return (
    <Box
      sx={{
        width: ' min(90% , 30rem)',
        minHeight: '500px',
        backgroundColor: '',
        color: '#fff',
        marginInline: 'auto',
        marginTop: '40px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        boxShadow: '2px 2px 4px rgba(0,0,0,.2)',
        padding: 'max(1.5rem , 2vw)',
      }}>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        fullWidth
      />

      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        fullWidth
      />

      <Box
        width="100%"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember Me"
          sx={{ color: '#141414' }}
        />

        <Button
          color="primary"
          sx={{ textTransform: 'capitalize' }}>
          Forgot Password
        </Button>
      </Box>

      <Button
        variant="contained"
        disableElevation
        fullWidth>
        Log In
      </Button>
    </Box>
  );
}
