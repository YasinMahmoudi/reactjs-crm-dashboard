import {
  Chip,
  Divider,
  Grid,
  Paper,
  Skeleton,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useGetInvoice } from './useGetInvoice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  maxWidth: '100%',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  flex:'100%',

  [`@media screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
    flex : 1
    
  },
}));

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

export default function InvoiceRead() {
  const { invoice, isLoadingInvoice } = useGetInvoice();

  const products = invoice?.items;
  const client = invoice?.client;

  if (isLoadingInvoice)
    return (
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: 'wrap' }}>
        <Skeleton
          variant="rounded"
          height={200}
          sx={{ flex: 1 }}
          animation="wave"
        />

        <Skeleton
          variant="rounded"
          height={200}
          sx={{ flex: 1 }}
          animation="wave"
        />
        <Skeleton
          variant="rounded"
          height={200}
          sx={{ flex: '100%' }}
          animation="wave"
        />
      </Stack>
    );

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{ flexWrap: 'wrap' }}>
      <Item>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <Grid
            container
            size={12}
            alignItems="center"
            justifyContent="space-between">
            <Typography>Status</Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              fontWeight="600">
              {invoice.status}
            </Typography>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center"
            justifyContent="space-between">
            <Typography>SubTotal</Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              fontWeight="600">
              $ {new Intl.NumberFormat().format(invoice.subTotal)}
            </Typography>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center"
            justifyContent="space-between">
            <Typography>Total</Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              fontWeight="600">
              $ {new Intl.NumberFormat().format(invoice.total)}
            </Typography>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center"
            justifyContent="space-between">
            <Typography>Paid</Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              fontWeight="600">
              ${' '}
              {new Intl.NumberFormat('en-US', {
                minimumSignificantDigits: 3,
              }).format(invoice.credit)}
            </Typography>
          </Grid>
        </Grid>
      </Item>
      <Item>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <Grid
            container
            size={12}
            alignItems="center"
            justifyContent="space-between">
            <Typography>Client </Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              fontWeight="600">
              {client.name}
            </Typography>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center"
            justifyContent="space-between">
            <Typography>Address</Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              fontWeight="600">
              {client.address}
            </Typography>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center"
            justifyContent="space-between">
            <Typography>Email</Typography>

            <Typography
              variant="subtitle1"
              color="textPrimary"
              fontWeight="600">
              {client.email}
            </Typography>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center"
            justifyContent="space-between">
            <Typography>Phone</Typography>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              fontWeight="600">
              {client.phone}
            </Typography>
          </Grid>
        </Grid>
      </Item>
      <Item sx={{ flex: '100% !important' }}>
        <Divider
          textAlign="left"
          sx={{ mb: 3 }}>
          <Chip
            label="Products"
            size="small"
          />
        </Divider>

        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700 }}
            aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <StyledTableRow key={product._id}>
                  <StyledTableCell
                    component="th"
                    scope="row">
                    {product.itemName}
                  </StyledTableCell>

                  <StyledTableCell>
                    {product.description ? (
                      product.description
                    ) : (
                      <span>&mdash;</span>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    ${' '}
                    {new Intl.NumberFormat('en-US', {
                      minimumSignificantDigits: 3,
                    }).format(product.price)}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {product.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    ${' '}
                    {new Intl.NumberFormat('en-US', {
                      minimumSignificantDigits: 3,
                    }).format(product.total)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Item>
    </Stack>
  );
}
