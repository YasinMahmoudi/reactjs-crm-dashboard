import Paper from '@mui/material/Paper';

import styled from 'styled-components';

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

export default function Sidebar({ children }) {
  return (
    <StyledSidebar>
      <StyledPaper elevation={0}>{children}</StyledPaper>
    </StyledSidebar>
  );
}
