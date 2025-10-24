import Button from '@mui/material/Button';
import { Link } from 'react-router';



function MainButton({
  children,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  to = null,
}) {
  if (to) {
    return (
      <Button
        variant={variant}
        size={size}
        color={color}
        sx={{ paddingBlock: '.6rem' }}
        LinkComponent={Link}
        to={to}>
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      sx={{ paddingBlock: '.6rem' }}>
      {children}
    </Button>
  );
}

export default MainButton;
