import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { Row } from '../../components/Row';
import { ArrowBack, Refresh } from '@mui/icons-material';
import { useBack } from '../../hooks/useBack';
import CustomersTable from './CustomersTable';

export default function Customers() {
  const moveBack = useBack();

  return (
    <>
      <Row sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
        <IconButton
          aria-label="nivigate back"
          color="warning"
          onClick={moveBack}
          sx={{
            alignSelf: { xs: 'flex-start', sm: 'stretch' },
            marginBottom: { xs: '10px', sm: 0 },
          }}>
          <ArrowBack />
        </IconButton>

        <Row sx={{ gap: '10px', flexWrap: 'wrap' }}>
          <TextField
            id="standard-password-input"
            label="Search"
            type="search"
            variant="outlined"
            size="small"
            sx={{
              order: { xs: '3', sm: '0' },
              flexGrow: { xs: '1', sm: 'initial' },
              marginTop: { xs: '8px', sm: '0' },
              width: { xs: '100%', sm: 'auto' },
            }}
          />
          <Button
            variant="outlined"
            size="small"
            sx={{ display: 'flex', gap: '5px', paddingBlock: '7px' }}>
            <Refresh />
            <Typography sx={{ display: { xs: 'none' } }}> Refresh </Typography>
          </Button>

          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{ paddingBlock: '7px' }}>
            <Typography>Add New Client</Typography>
          </Button>
        </Row>
      </Row>

      <Box sx={{ mt: 3 }}>
        <CustomersTable />
      </Box>
    </>
  );
}
