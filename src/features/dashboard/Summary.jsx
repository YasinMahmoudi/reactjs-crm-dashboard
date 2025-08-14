import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  paddingBlock: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Summary() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid size={{ xs: 4, sm: 2, md: 3 }}>
          <Item>
            <Typography>Invoices</Typography>
            <Divider sx={{ my: 2 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                />
              }
              spacing={2}>
              <span>This Month</span>
              <span>
                <Chip
                  label="$3000"
                  color="error"
                  variant="filled"
                />
              </span>
            </Stack>
          </Item>
        </Grid>

        <Grid size={{ xs: 4, sm: 2, md: 3 }}>
          <Item>
            <Typography>Invoices</Typography>
            <Divider sx={{ my: 2 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                />
              }
              spacing={2}>
              <span>This Month</span>
              <span>
                <Chip
                  label="$3000"
                  color="error"
                  variant="filled"
                />
              </span>
            </Stack>
          </Item>
        </Grid>

        <Grid size={{ xs: 4, sm: 2, md: 3 }}>
          <Item>
            <Typography>Invoices</Typography>
            <Divider sx={{ my: 2 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                />
              }
              spacing={2}>
              <span>This Month</span>
              <span>
                <Chip
                  label="$3000"
                  color="error"
                  variant="filled"
                />
              </span>
            </Stack>
          </Item>{' '}
        </Grid>

        <Grid size={{ xs: 4, sm: 2, md: 3 }}>
          <Item>
            <Typography>Invoices</Typography>
            <Divider sx={{ my: 2 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                />
              }
              spacing={2}>
              <span>This Month</span>
              <span>
                <Chip
                  label="$3000"
                  color="error"
                  variant="filled"
                />
              </span>
            </Stack>
          </Item>{' '}
        </Grid>
      </Grid>
    </Box>
  );
}
