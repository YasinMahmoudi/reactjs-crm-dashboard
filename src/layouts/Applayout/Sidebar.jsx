import Paper from '@mui/material/Paper';

import { Drawer } from '@mui/material';
import styled from 'styled-components';
import MainNav from '../../components/MainNav';

import PropTypes from 'prop-types';

const StyledSidebar = styled.aside`
  grid-column: 1 / 2;
  grid-row: 1/ -1;
  padding: max(2rem, 2vw);
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
    border-right: 1px solid #e3e3e3;
  }
`;

const StyledPaper = styled(Paper)`
  background-color: transparent !important;
`;

export default function Sidebar({ toggleSidebar, open }) {
  return (
    <StyledSidebar>
      <StyledPaper elevation={0}>
        <Drawer
          open={open}
          onClose={toggleSidebar(false)}
          sx={{
            display: { sm: 'block', md: 'none' },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}>
          <MainNav />
        </Drawer>

        <MainNav />


      </StyledPaper>
    </StyledSidebar>
  );
}

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
