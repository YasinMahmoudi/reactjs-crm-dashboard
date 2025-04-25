import PropTypes from 'prop-types';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router';

import styled from 'styled-components';
import { ListItemButton } from '@mui/material';

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
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

export default function ListItemLink({ icon, primary, to }) {
  return (
    <StyledListItemLink
      component={NavLink}
      to={to}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </StyledListItemLink>
  );
}
