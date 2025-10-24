import Drawer from '@mui/material/Drawer';


const mobileSidebar = {
  display: { sm: 'block', md: 'none' },
};

export default function MobileSidebar({ children, toggleSidebar, open }) {
  return (
    <Drawer
      open={open}
      onClose={toggleSidebar(false)}
      sx={mobileSidebar}
      slotProps={{
        root: {
          keepMounted: true,
        },
      }}>
      {children}
    </Drawer>
  );
}
