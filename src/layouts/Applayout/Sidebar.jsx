import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

const StyledSidebar = styled('aside')(({ theme }) => [
  {
    gridColumn: '1 / 2',
    gridRow: ' 1 / -1',
    padding: 'max(2rem ,  2vw)',
    display: 'none',

    '@media screen and (min-width: 900px)': {
      display: 'block',
      borderRight: '1px solid #e3e3e3',
    },
  },

  theme.applyStyles('dark', {
      borderRight: '1px solid #363434 !important',
  }),
]);

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
