import {
  Chip,
  Divider,
  Grid,
  Paper,
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
import { useParams } from 'react-router';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  maxWidth: '100%',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function InvoiceRead() {
  const { readId } = useParams();

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{ flexWrap: 'wrap' }}>
      <Item sx={{ flex: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Status</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                pending
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>SubTotal</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                $ 4,473.00
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Total</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                $ 4,473.00
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Paid</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                $ 1,312.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Item>
      <Item sx={{ flex: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Client </Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                Stephanie Wilkinson
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Address</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                Similique dolore und
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Email</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                cyxacaguz@mailinator.com
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Phone</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                +1 (466) 891-4684
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Item>
      <Item sx={{ flex: '100%' }}>
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
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Item>
    </Stack>
  );
}
