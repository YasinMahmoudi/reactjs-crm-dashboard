import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import AuthLayout from '../../layouts/AuthLayout';
import AuthBox from '../../components/AuthBox';
import { Link } from 'react-router';
import { Row } from '../../components/Row';
import { useState } from 'react';
import { loginService } from '../../services/auth/login';

export default function Login() {
  const [email, setEmail] = useState('admin@demo.com');
  const [password, setPassword] = useState('admin123');
  const [remember, setRemember] = useState(false);

  function handleLogin() {
    loginService({ email, password, remember });
  }

  return (
    <AuthLayout>
      <AuthBox title="Sign In">
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Row width="100%">
          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
            sx={{ color: '#141414' }}
            onChange={() => setRemember((remember) => !remember)}
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
          onClick={handleLogin}>
          Log In
        </Button>
      </AuthBox>
    </AuthLayout>
  );
}
