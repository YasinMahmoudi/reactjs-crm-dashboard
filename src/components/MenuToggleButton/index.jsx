import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function MenuToggleButton({ toggleSidebar }) {
  return (
    <IconButton
      onClick={toggleSidebar(true)}
      sx={{ display: { md: 'none' }}}>
      <MenuIcon />
    </IconButton>
  );
}

export default MenuToggleButton;
