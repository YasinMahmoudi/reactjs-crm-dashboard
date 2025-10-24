import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import AuthLayout from '../../layouts/AuthLayout';
import AuthBox from '../../components/AuthBox';

export default function Login() {
  return (
    <AuthLayout>
      <AuthBox title="Forget Password ">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
        />

        <Button
          variant="contained"
          disableElevation
          fullWidth
          sx={{ textTransform: 'capitalize' }}>
          Request New Password
        </Button>
      </AuthBox>
    </AuthLayout>
  );
}
