import PropTypes from 'prop-types';
import SimpleTable from '../../components/SimpleTable';
import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';
import { useGetInvoice } from './useGetInvoice';
import InvoiceProductTableSkeleton from '../../components/Skeletons/invoices/InvoiceProductTableSkeleton';
import { Suspense } from 'react';

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
    label: 'Product',
    align: '',
  },
  {
    label: 'Description',
    align: '',
  },
  {
    label: 'Price',
  },
  {
    label: 'Quantity',
  },
  {
    label: 'Total',
  },
];

export default function InvoiceReadProductsTable() {
  return (
    <SimpleTable>
      <SimpleTable.Head heads={heads} />

      <Suspense fallback={<InvoiceProductTableSkeleton />}>
        <ProductRows />
      </Suspense>
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

function ProductRows() {
  const { invoice } = useGetInvoice();

  const products = invoice?.items;

  return (
    <SimpleTable.Body
      items={products}
      render={(product) => (
        <InvoiceReadProductRow
          key={product._id}
          product={product}
        />
      )}
    />
  );
}
