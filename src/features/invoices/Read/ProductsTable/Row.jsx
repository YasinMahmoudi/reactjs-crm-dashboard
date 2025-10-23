import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function InvoiceReadProductRow({ product }) {
  return (
    <StyledTableRow key={product._id}>
      <StyledTableCell
        component="th"
        scope="row">
        {product.itemName}
      </StyledTableCell>

      <StyledTableCell>
        {product.description ? product.description : <span>&mdash;</span>}
      </StyledTableCell>
      <StyledTableCell>
        ${' '}
        {new Intl.NumberFormat('en-US', {
          minimumSignificantDigits: 3,
        }).format(product.price)}
      </StyledTableCell>
      <StyledTableCell>{product.quantity}</StyledTableCell>
      <StyledTableCell>
        ${' '}
        {new Intl.NumberFormat('en-US', {
          minimumSignificantDigits: 3,
        }).format(product.total)}
      </StyledTableCell>
    </StyledTableRow>
  );
}
