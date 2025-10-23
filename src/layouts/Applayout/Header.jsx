import Box from '@mui/material/Box';

import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
  border-bottom: 1px solid #e3e3e3;

  @media screen and (min-width: 900px) {
    grid-column: 2 / -1;
    grid-row: 1 / 2;
  }
`;

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
