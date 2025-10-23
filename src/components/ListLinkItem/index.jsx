import { NavLink } from 'react-router';

import ListItemButton from '@mui/material/ListItemButton';
import { forwardRef } from 'react';
import { styled } from '@mui/material';

const StyledListItemLink = styled(ListItemButton)(({ theme }) => [
  {
    color: '#4e4b4b',
    borderRadius: 3,
    marginBottom:2,
    '&:hover , &:active , &.active:link , &.active:visited': {
      color: '#f1f1f1',
      backgroundColor: theme.palette.primary.main,
      '& svg': {
        fill: '#f1f1f1',
      },
    },
  },

  theme.applyStyles('dark', {
    color: '#bab9b9',
  }),
]);

// eslint-disable-next-line react/display-name
const CustomNavLink = forwardRef((props, ref) => (
  <NavLink
    end
    ref={ref}
    {...props}
  />
));

export default function ListItemLink({ to, children }) {
  return (
    <StyledListItemLink
      component={CustomNavLink}
      to={to}>
      {children}
    </StyledListItemLink>
  );
}
