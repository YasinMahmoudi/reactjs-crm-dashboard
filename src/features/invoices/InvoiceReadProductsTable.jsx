import PropTypes from 'prop-types';
import SimpleTable from '../../components/SimpleTable';
import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';

InvoiceReadProductsTable.propTypes = {
  products: PropTypes.array,
};

InvoiceReadProductRow.propTypes = {
  product: PropTypes.object,
};

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

const heads = [
  {
    label: 'Products',
    align: '',
  },
  {
    label: 'Description',
    align: '',
  },
  {
    label: 'Price',
    align: 'center',
  },
  {
    label: 'Quantity',
    align: 'center',
  },
  {
    label: 'Total',
    align: 'center',
  },
];

export default function InvoiceReadProductsTable({ products }) {
  return (
    <SimpleTable>
      <SimpleTable.Head heads={heads} />

      <SimpleTable.Body
        items={products}
        render={(product) => (
          <InvoiceReadProductRow
            key={product._id}
            product={product}
          />
        )}
      />
    </SimpleTable>
  );
}

function InvoiceReadProductRow({ product }) {
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
      <StyledTableCell align="center">
        ${' '}
        {new Intl.NumberFormat('en-US', {
          minimumSignificantDigits: 3,
        }).format(product.price)}
      </StyledTableCell>
      <StyledTableCell align="center">{product.quantity}</StyledTableCell>
      <StyledTableCell align="center">
        ${' '}
        {new Intl.NumberFormat('en-US', {
          minimumSignificantDigits: 3,
        }).format(product.total)}
      </StyledTableCell>
    </StyledTableRow>
  );
}
