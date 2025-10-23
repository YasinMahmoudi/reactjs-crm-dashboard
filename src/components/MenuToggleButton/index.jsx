import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';



function MenuToggleButton({ toggleSidebar }) {
  return (
    <Button
      onClick={toggleSidebar(true)}
      sx={{ display: { md: 'none' } }}>
      <MenuIcon sx={{ fill: '#141414' }} />
    </Button>
  );
}

export default MenuToggleButton;
