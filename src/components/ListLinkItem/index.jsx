import PropTypes from 'prop-types';
import { NavLink } from 'react-router';

import ListItemButton from '@mui/material/ListItemButton';
import styled from 'styled-components';

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

export default function ListItemLink({ to, children }) {
  return (
    <StyledListItemLink
      component={NavLink}
      to={to}>
      {children}
    </StyledListItemLink>
  );
}
