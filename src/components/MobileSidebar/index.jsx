import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';

MobileSidebar.propTypes = {
  children: PropTypes.object,
  toggleSidebar: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

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
