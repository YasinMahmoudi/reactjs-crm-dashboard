import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import CollapseMenu from '../CollapseMenu';

import { Row } from '../Row';

import Logout from '@mui/icons-material/Logout';
import Person from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';

import { deepOrange } from '@mui/material/colors';
import { useLogout } from '../../features/auth/useLogout';

export default function HeaderMenu() {
  const { logout, isLogingout } = useLogout();

  return (
    <CollapseMenu>
      <CollapseMenu.Button>
        <Avatar sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}>
          Y
        </Avatar>
      </CollapseMenu.Button>

      <CollapseMenu.Menu>
        <CollapseMenu.MenuItem>
          <Row>
            <Avatar />

            <Row sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="body2"> Yasin </Typography>
              <Typography variant="caption"> admin@gmailc.om </Typography>
            </Row>
          </Row>
        </CollapseMenu.MenuItem>
        <Divider />
        <CollapseMenu.MenuItem>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          Profile settings
        </CollapseMenu.MenuItem>
        <CollapseMenu.MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          App Settings
        </CollapseMenu.MenuItem>
        <CollapseMenu.MenuItem
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
        </CollapseMenu.MenuItem>
      </CollapseMenu.Menu>
    </CollapseMenu>
  );
}

HeaderMenu.propTypes = {};

