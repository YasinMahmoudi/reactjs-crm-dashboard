import { useState } from 'react';
import { Logout, Person, Settings } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import styled from 'styled-components';

import { Row } from '../../components/Row';

import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { useLogout } from '../../features/auth/useLogout';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
  border-bottom: 1px solid #e3e3e3;

  @media screen and (min-width: 900px) {
    grid-column: 2 / -1;
    grid-row: 1 / 2;
  }
`;

export default function Header({ toggleSidebar }) {
  const { logout, isLogingout } = useLogout();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Button
          onClick={toggleSidebar(true)}
          sx={{ display: { md: 'none' } }}>
          <MenuIcon sx={{ fill: '#141414' }} />
        </Button>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 'auto' }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}>
              Y
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
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
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={handleClose}>
          <Row>
            <Avatar />

            <Row sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="body2"> Yasin </Typography>
              <Typography variant="caption"> admin@gmailc.om </Typography>
            </Row>
          </Row>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          Profile settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          App Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            logout();
          }}
          sx={{ color: 'crimson' }}>
          <ListItemIcon>
            {isLogingout ? (
              <CircularProgress
                size={20}
                color="error"
              />
            ) : (
              <Logout
                fontSize="small"
                sx={{ fill: 'crimson' }}
              />
            )}
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </StyledHeader>
  );
}

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
