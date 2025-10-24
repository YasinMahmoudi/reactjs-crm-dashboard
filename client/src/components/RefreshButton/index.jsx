import Refresh from '@mui/icons-material/Refresh';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const style = { display: 'flex', gap: '5px', paddingBlock: '.6rem' };

function RefreshButton() {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={style}>
      <Refresh />
      <Typography sx={{ display: { xs: 'none' } }}> Refresh </Typography>
    </Button>
  );
}

export default RefreshButton;
