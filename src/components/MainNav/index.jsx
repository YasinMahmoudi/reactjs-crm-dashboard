import CreditCardOutlined from '@mui/icons-material/CreditCardOutlined';
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import HeadphonesOutlined from '@mui/icons-material/HeadphonesOutlined';
import ListAltOutlined from '@mui/icons-material/ListAltOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import StoreOutlined from '@mui/icons-material/StoreOutlined';
import WalletOutlined from '@mui/icons-material/WalletOutlined';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemLink from '../ListLinkItem';

export default function MainNav() {
  return (
    <List aria-label="main folders">
      <ListItem disablePadding>
        <ListItemLink to="/dashboard">
          <ListItemIcon>
            <DashboardOutlined />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/customers">
          <ListItemIcon>
            <HeadphonesOutlined />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/invoices">
          <ListItemIcon>
            <DescriptionOutlined />
          </ListItemIcon>
          <ListItemText primary="invoices" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/payments">
          <ListItemIcon>
            <CreditCardOutlined />
          </ListItemIcon>
          <ListItemText primary="Payment" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/payment/mode">
          <ListItemIcon>
            <WalletOutlined />
          </ListItemIcon>
          <ListItemText primary="Payments Mode" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/taxes">
          <ListItemIcon>
            <StoreOutlined />
          </ListItemIcon>
          <ListItemText primary="Taxes" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/settings">
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/about">
          <ListItemIcon>
            <ListAltOutlined />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemLink>
      </ListItem>
    </List>
  );
}
