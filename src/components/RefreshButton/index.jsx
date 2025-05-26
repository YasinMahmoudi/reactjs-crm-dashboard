import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';
import { Refresh } from '@mui/icons-material';

RefreshButton.propTypes = {};


function RefreshButton() {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{ display: 'flex', gap: '5px', paddingBlock: '7px' }}>
      <Refresh />
      <Typography sx={{ display: { xs: 'none' } }}> Refresh </Typography>
    </Button>
  );
}


export default RefreshButton;
