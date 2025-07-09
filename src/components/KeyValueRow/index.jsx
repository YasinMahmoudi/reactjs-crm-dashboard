import { Grid, Typography } from '@mui/material';

import PropTypes from 'prop-types';

KeyValueRow.propTypes = {
  keyName: PropTypes.string,
  value: PropTypes.string,
};

export default function KeyValueRow({ keyName = 'Key', value = 'Value' }) {
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
        {value}
      </Typography>
    </Grid>
  );
}
