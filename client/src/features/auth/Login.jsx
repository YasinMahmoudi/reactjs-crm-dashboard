import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import AuthLayout from '../../layouts/AuthLayout';
import AuthBox from '../../components/AuthBox';
import { Link, useNavigate } from 'react-router';
import { Row } from '../../components/Row';
import { useEffect, useState } from 'react';
import { useLogin } from './useLogin';
import { useVerifyUser } from './useVerifyUser';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('admin@demo.com');
  const [password, setPassword] = useState('admin123');
  const [remember, setRemember] = useState(false);

  const { login, isPending } = useLogin();
  const { hasToken, isLoading } = useVerifyUser();

  useEffect(
    function () {
      if (!hasToken && !isLoading) navigate('/');
      else navigate('/dashboard');
    },
    [hasToken, isLoading, navigate]
  );

  function handleLogin() {
    login({ email, password, remember });
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
          onClick={handleLogin}
          endIcon={<></>}
          loading={isPending || isLoading}
          loadingPosition="end">
          Log In
        </Button>
      </AuthBox>
    </AuthLayout>
  );
}
