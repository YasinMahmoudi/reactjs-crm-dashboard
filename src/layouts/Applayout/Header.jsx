import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';

const StyledHeader = styled('aside')(({ theme }) => [
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '2rem',
    borderBottom: '1px solid #e3e3e3',

    '@media screen and (min-width: 900px)': {
      gridColumn: '2 / -1',
      gridRow: '1 / 2',
    },
  },

  theme.applyStyles('dark', {
    borderBottom: '1px solid #363434 !important',
  }),
]);

const headerBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'space-between',
  width: '100%',
};

export default function Header({ children }) {
  return (
    <StyledHeader>
      <Box sx={headerBoxStyle}>{children}</Box>
    </StyledHeader>
  );
}
