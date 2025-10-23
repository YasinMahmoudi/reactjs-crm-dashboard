import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { createContext } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const SimpleTableContext = createContext();

export default function SimpleTable({ children }) {
  return (
    <SimpleTableContext.Provider value={{}}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table">
          {children}
        </Table>
      </TableContainer>
    </SimpleTableContext.Provider>
  );
}

function Head({ heads }) {
  return (
    <TableHead>
      <TableRow>
        {heads.map((head, i) => (
          <StyledTableCell
            key={i}
            align={head.align}>
            {head.label}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function Body({ render, items }) {
  return <TableBody>{items.map(render)}</TableBody>;
}

SimpleTable.Head = Head;
SimpleTable.Body = Body;

