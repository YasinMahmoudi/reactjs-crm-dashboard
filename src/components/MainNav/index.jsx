import CreditCardOutlined from '@mui/icons-material/CreditCardOutlined';
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import FormatQuoteOutlined from '@mui/icons-material/FormatQuoteOutlined';
import HeadphonesOutlined from '@mui/icons-material/HeadphonesOutlined';
import ListAltOutlined from '@mui/icons-material/ListAltOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import StoreOutlined from '@mui/icons-material/StoreOutlined';
import WalletOutlined from '@mui/icons-material/WalletOutlined';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemLink from '../ListLinkItem';
import ListItemIcon from '@mui/material/ListItemIcon';

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
        <ListItemLink to="/qoutes">
          <ListItemIcon>
            <FormatQuoteOutlined />
          </ListItemIcon>
          <ListItemText primary="Qoute" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/">
          <ListItemIcon>
            <CreditCardOutlined />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/">
          <ListItemIcon>
            <WalletOutlined />
          </ListItemIcon>
          <ListItemText primary="Payments Mode" />
        </ListItemLink>
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink to="/">
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
