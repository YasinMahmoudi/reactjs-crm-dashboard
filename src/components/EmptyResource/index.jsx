import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';

EmptyResource.propTypes = {
  resourceName: PropTypes.string,
};

function EmptyResource({ resourceName = 'resource' }) {
  const modifiedResourceName = resourceName.toLocaleLowerCase();

  return (
    <Box
      mt={10}
      mb={10}
      textAlign={'center'}>
      <Typography variant="h6">
        No {modifiedResourceName} found with! 😓
      </Typography>
    </Box>
  );
}

export default EmptyResource;
