import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

PageLoader.propTypes = {
  size: PropTypes.number,
};

export default function PageLoader({ size }) {
  return <CircularProgress size={size} />;
}
