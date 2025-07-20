import PropTypes from 'prop-types';
import { NavLink } from 'react-router';

import ListItemButton from '@mui/material/ListItemButton';
import styled from 'styled-components';
import { forwardRef } from 'react';

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.object,
};

const StyledListItemLink = styled(ListItemButton)`
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #f1f1f1;
    background-color: #1241cc !important;

    & svg {
      fill: #f1f1f1;
    }
  }
`;

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
