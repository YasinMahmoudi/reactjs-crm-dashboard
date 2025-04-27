import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import { Row } from '../../components/Row';
import { ArrowBack, Refresh } from '@mui/icons-material';
import { useBack } from '../../hooks/useBack';
import CustomersTable from './CustomersTable';

const StyledBox = styled(Box)`
  --box-padding: max(2rem, 2vw);
  --border-radius: 10px;

  border: 1px solid #e3e3e3;
  padding: var(--box-padding);
  border-radius: var(--border-radius);
`;

export default function Customers() {
  const moveBack = useBack();

  return (
    <StyledBox>
      <Row>
        <Row>
          <IconButton
            aria-label="nivigate back"
            color="warning"
            onClick={moveBack}>
            <ArrowBack />
          </IconButton>
          <Typography variant="body2"> Client List </Typography>
        </Row>

        <Row sx={{ gap: '10px' }}>
          <TextField
            id="standard-password-input"
            label="Search"
            type="search"
            variant="outlined"
            size="small"
          />
          <Button
            variant="outlined"
            size="large"
            sx={{ display: 'flex', gap: '5px' }}>
            <Refresh />
            <Typography> Refresh </Typography>
          </Button>

          <Button
            variant="contained"
            size="large"
            color="primary">
            <Typography>Add New Client</Typography>
          </Button>
        </Row>
      </Row>

      <Box sx={{ mt: 3 }}>
        <CustomersTable />
      </Box>
    </StyledBox>
  );
}
