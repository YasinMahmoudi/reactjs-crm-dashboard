import Paper from '@mui/material/Paper';

import styled from 'styled-components';
import MainNav from '../../components/MainNav';

const StyledSidebar = styled.aside`
  grid-column: 1 / 2;
  grid-row: 1/ -1;
  padding: max(2rem, 2vw);
`;

const StyledPaper = styled(Paper)`
  background-color: transparent !important;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <StyledPaper elevation={0}>
        <MainNav />
      </StyledPaper>
    </StyledSidebar>
  );
}
