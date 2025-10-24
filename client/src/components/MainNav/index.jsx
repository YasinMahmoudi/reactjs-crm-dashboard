import CreditCardOutlined from '@mui/icons-material/CreditCardOutlined';
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import HeadphonesOutlined from '@mui/icons-material/HeadphonesOutlined';
import ListAltOutlined from '@mui/icons-material/ListAltOutlined';
import StoreOutlined from '@mui/icons-material/StoreOutlined';
import WalletOutlined from '@mui/icons-material/WalletOutlined';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemLink from '../ListLinkItem';

export default function MainNav({ sx }) {
  return (
    <List
      aria-label="main folders"
      sx={sx}>
      <ListItem disablePadding>
        <ListItemLink to="/dashboard">
          <ListItemIcon sx={{ minWidth: '26px' }}>
            <DashboardOutlined />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/customers">
          <ListItemIcon sx={{ minWidth: '26px' }}>
            <HeadphonesOutlined />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/invoices">
          <ListItemIcon sx={{ minWidth: '26px' }}>
            <DescriptionOutlined />
          </ListItemIcon>
          <ListItemText primary="invoices" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/payment">
          <ListItemIcon sx={{ minWidth: '26px' }}>
            <CreditCardOutlined />
          </ListItemIcon>
          <ListItemText primary="Payment" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/payment/mode">
          <ListItemIcon sx={{ minWidth: '26px' }}>
            <WalletOutlined />
          </ListItemIcon>
          <ListItemText primary="Payments Mode" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/taxes">
          <ListItemIcon sx={{ minWidth: '26px' }}>
            <StoreOutlined />
          </ListItemIcon>
          <ListItemText primary="Taxes" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/about">
          <ListItemIcon sx={{ minWidth: '26px' }}>
            <ListAltOutlined />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemLink>
      </ListItem>
    </List>
  );
}
