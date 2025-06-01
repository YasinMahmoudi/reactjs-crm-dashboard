import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import PropTypes from 'prop-types';

EmptyResource.propTypes = {
  keyWord: PropTypes.string,
  resourceName: PropTypes.string,
};

const lableStyle = { marginInline: '10px', width: 'min(100px , 120px )' };

function EmptyResource({ keyWord, resourceName = 'resource' }) {
  const modifiedResourceName = resourceName.toLocaleLowerCase();

  return (
    <Box
      mt={10}
      mb={10}
      textAlign={'center'}>
      <Typography variant="h6">
        No {modifiedResourceName} found with
        <Chip
          label={keyWord}
          color="error"
          sx={lableStyle}
        />
        key word ! 😓
      </Typography>
    </Box>
  );
}

export default EmptyResource;
