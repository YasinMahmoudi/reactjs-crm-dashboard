import IconButton from '@mui/material/IconButton';
import PortalMenu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItemMui from '@mui/material/MenuItem';

import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const menuStyle = {
  overflow: 'visible',
  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
  mt: 1.5,
  '& .MuiAvatar-root': {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 1,
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: 'background.paper',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 0,
  },
};

CollapseMenu.propTypes = {
  children: PropTypes.object,
};

Button.propTypes = {
  children: PropTypes.object,
};

Menu.propTypes = {
  children: PropTypes.object,
};

MenuItem.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
};

const CollapseMenuContext = createContext();

export default function CollapseMenu({ children }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CollapseMenuContext.Provider
      value={{ handleClick, handleClose, anchorEl, setAnchorEl, open }}>
      {children}
    </CollapseMenuContext.Provider>
  );
}

function Button({ children }) {
  const { handleClick } = useContext(CollapseMenuContext);

  return (
    <Tooltip title="Account settings">
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 'auto' }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}>
        {children}
      </IconButton>
    </Tooltip>
  );
}

function Menu({ children }) {
  const { anchorEl, handleClose, open } = useContext(CollapseMenuContext);

  return (
    <PortalMenu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: menuStyle,
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
      {children}
    </PortalMenu>
  );
}

function MenuItem({ children, onClick }) {
  const { handleClose } = useContext(CollapseMenuContext);

  return (
    <MenuItemMui onClick={() => onClick?.() || handleClose}>
      {children}
    </MenuItemMui>
  );
}

CollapseMenu.Button = Button;
CollapseMenu.Menu = Menu;
CollapseMenu.MenuItem = MenuItem;
