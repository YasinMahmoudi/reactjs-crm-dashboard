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
import { useGetAdmin } from '../../features/admin/useGetAdmin';
import { extractFirstLetter } from '../../utils/strings';
import { useNavigate } from 'react-router';
import { UPLOAD_URL } from '../../utils/constants';

export default function HeaderMenu() {
  const navigate = useNavigate();

  const { logout, isLogingout } = useLogout();
  const { admin: { email, name, photo } = {}, isLoadingAdmin } = useGetAdmin();

  const avatarDisplayName = extractFirstLetter(name);

  return (
    <CollapseMenu>
      {isLoadingAdmin ? (
        <CircularProgress
          size={30}
          sx={{ display: 'inline-block', marginLeft: 'auto' }}
        />
      ) : (
        <CollapseMenu.Button>
          <Avatar
            sx={{ width: 40, height: 40, bgcolor: deepOrange[500] }}
            alt={`Admin Avatar ${name}`}
            src={`${UPLOAD_URL}/${photo}`}>
            {avatarDisplayName}
          </Avatar>
        </CollapseMenu.Button>
      )}

      <CollapseMenu.Menu>
        <CollapseMenu.MenuItem>
          <Row>
            <Avatar />

            <Row sx={{ flexDirection: 'column', marginLeft: '8px' }}>
              <Typography variant="body2"> {name} </Typography>
              <Typography variant="caption"> {email} </Typography>
            </Row>
          </Row>
        </CollapseMenu.MenuItem>
        <Divider />
        <CollapseMenu.MenuItem onClick={() => navigate('/profile')}>
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
