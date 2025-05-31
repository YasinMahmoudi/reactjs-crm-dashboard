import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';

import PropTypes from 'prop-types';
import { useState } from 'react';

ContextMenu.propTypes = {
  options: PropTypes.array,
};

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
              width: '15ch',
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
            sx={option.icon ? { gap: '5px' } : {}}>
            {option.icon}
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
