import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import AuthLayout from '../../layouts/AuthLayout';
import AuthBox from '../../components/AuthBox';
import { Link, useNavigate } from 'react-router';
import { Row } from '../../components/Row';

export default function Login() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <AuthBox title="Sign In">
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

        <Row width="100%">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember Me"
            sx={{ color: '#141414' }}
          />

          <Button
            color="primary"
            sx={{
              textTransform: 'capitalize',
              '> a': {
                textDecoration: 'none',
                color: 'inherit',
              },
            }}>
            <Link to="/forget-password">Forgot Password</Link>
          </Button>
        </Row>

        <Button
          variant="contained"
          disableElevation
          fullWidth
          onClick={() => navigate('/dashboard', { replace: true })}>
          Log In
        </Button>
      </AuthBox>
    </AuthLayout>
  );
}
