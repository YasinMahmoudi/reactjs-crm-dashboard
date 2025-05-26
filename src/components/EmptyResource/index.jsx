import { Box, Chip, Typography } from '@mui/material';
import PropTypes from 'prop-types';

EmptyResource.propTypes = {
  keyWord: PropTypes.string,
  resourceName: PropTypes.string,
};

function EmptyResource({ keyWord, resourceName = 'resource' }) {
  const modifiedResourceName = resourceName.toLocaleLowerCase();

  return (
    <Box
      mt={10}
      textAlign={'center'}>
      <Typography variant="h6">
        No {modifiedResourceName} found with
        <Chip
          label={keyWord}
          color="error"
          sx={{ marginInline: '10px', width: 'min(100px , 120px )' }}
        />
        key word ! 😓
      </Typography>
    </Box>
  );
}

export default EmptyResource;
