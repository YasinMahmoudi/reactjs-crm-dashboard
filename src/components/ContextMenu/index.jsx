import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react';

export default function ContextMenu({ options }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleCloseDots = () => {
    setAnchorEl(null);
  };

  const handleClickDots = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClickDots}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        aria-hidden={open ? 'false' : undefined}
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseDots}
        slotProps={{
          paper: {
            style: {
              minWidth: '15ch',
            },
          },

          list: {
            'aria-labelledby': 'long-button',
          },
        }}>
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              option.onClick?.();
              handleCloseDots();
            }}
            sx={option.icon ? { gap: '5px', minHeight: { xs: 20 } } : {}}>
            {option.icon}
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
