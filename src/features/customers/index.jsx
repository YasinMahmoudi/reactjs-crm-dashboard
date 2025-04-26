import { Box, Fab, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import { Row } from '../../components/Row';
import { ArrowBack, Refresh } from '@mui/icons-material';

const StyledBox = styled(Box)`
  --box-padding: max(2rem, 2vw);
  --border-radius: 10px;

  border: 1px solid #e3e3e3;
  padding: var(--box-padding);
  border-radius: var(--border-radius);
`;

export default function Customers() {
  return (
    <StyledBox>
      <Row>
        <Row>
          <ArrowBack />
          <Typography variant="body2"> Client List </Typography>
        </Row>

        <Row sx={{ gap: '10px' }}>
          <TextField
            id="standard-password-input"
            label="Search"
            type="search"
            variant="outlined"
            size='small'
          />
          <Fab
            variant="index.jsx"
            size="small"
            color="default">
            <Refresh />
            {/* Refresh */}
          </Fab>

          <Fab
            variant="extended"
            size="small"
            color="primary">
            Add New Client
          </Fab>
        </Row>
      </Row>
    </StyledBox>
  );
}
