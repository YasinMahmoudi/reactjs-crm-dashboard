import PropTypes from 'prop-types';

SkeletonType.propTypes = {
  children: PropTypes.object,
};

export default function SkeletonType({ children }) {
  return children;
}
