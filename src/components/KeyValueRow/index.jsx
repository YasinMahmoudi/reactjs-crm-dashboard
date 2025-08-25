import { Grid, Typography } from '@mui/material';

import PropTypes from 'prop-types';

KeyValueRow.propTypes = {
  keyName: PropTypes.string,
  children: PropTypes.object,
};

export default function KeyValueRow({ keyName = 'Key', children = <></> }) {
  return (
    <Grid
      container
      size={12}
      alignItems="center"
      justifyContent="space-between">
      <Typography>{keyName}</Typography>

      <Typography
        variant="subtitle1"
        color="textPrimary"
        fontWeight="600">
        {children}
      </Typography>
    </Grid>
  );
}
