import { CircularProgress, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';

ContextMenu.propTypes = {
  options: PropTypes.array,
  loading:PropTypes.bool
};

export default function ContextMenu({ options, loading = false }) {
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
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={!loading && handleCloseDots}
        slotProps={{
          paper: {
            style: {
              width: '15ch',
            },
          },
        }}>
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              option.onClick?.();
              handleCloseDots();
            }}
            sx={option.icon ? { gap: '5px' } : {}}
            disabled={option.disabled}>
            {option.loading && <CircularProgress size={15} />}
            {!option.loading && option.icon && option.icon}
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
