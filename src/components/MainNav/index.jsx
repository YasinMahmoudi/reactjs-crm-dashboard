import {
  CreditCardOutlined,
  DashboardOutlined,
  DescriptionOutlined,
  FormatQuoteOutlined,
  HeadphonesOutlined,
  ListAltOutlined,
  SettingsOutlined,
  StoreOutlined,
  WalletOutlined,
} from '@mui/icons-material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemLink from '../ListLinkItem';

export default function MainNav() {
  return (
    <List aria-label="main folders">
      <ListItem disablePadding>
        <ListItemLink
          to="/dashboard"
          primary="Dashboard"
          icon={<DashboardOutlined />}
        />
      </ListItem>
      <ListItem disablePadding>
        <ListItemLink
          to="/customers"
          primary="Customers"
          icon={<HeadphonesOutlined />}
        />
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink
          to="/invoices"
          primary="Invoices"
          icon={<DescriptionOutlined />}
        />
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink
          to="/qoutes"
          primary="Qoute"
          icon={<FormatQuoteOutlined />}
        />
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink
          to="/"
          primary="Payments"
          icon={<CreditCardOutlined />}
        />
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink
          to="/"
          primary="Payments Mode"
          icon={<WalletOutlined />}
        />
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink
          to="/"
          primary="Taxes"
          icon={<StoreOutlined />}
        />
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink
          to="/settings"
          primary="Settings"
          icon={<SettingsOutlined />}
        />
      </ListItem>

      <ListItem disablePadding>
        <ListItemLink
          to="/about"
          primary="About"
          icon={<ListAltOutlined />}
        />
      </ListItem>
    </List>
  );
}
