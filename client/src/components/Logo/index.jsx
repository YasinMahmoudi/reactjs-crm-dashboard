import { styled } from '@mui/material/styles';
import { Link } from 'react-router';

const Img = styled('img')(({ theme }) => [
  {
    width: '100%',
    height: 'auto',
    padding: '1rem 3rem',
    marginBottom: '2rem',
  },

  theme.applyStyles('dark', {
    filter: 'invert(100%)',
  }),
]);

export default function Logo() {
  return (
    <Link to="/dashboard">
      <Img
        src="/logo.png"
        alt="Logo"
      />
    </Link>
  );
}
