import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Link } from 'react-router';

MainButton.propTypes = {
  children: PropTypes.object,
  variant: PropTypes.string,
  size: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
};

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
        sx={{ paddingBlock: '7px' }}
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
      sx={{ paddingBlock: '7px' }}>
      {children}
    </Button>
  );
}

export default MainButton;
