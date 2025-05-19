import { Row } from '../../components/Row';
import { Button, IconButton, Typography } from '@mui/material';
import { ArrowBack, Refresh } from '@mui/icons-material';
import { useBack } from '../../hooks/useBack';
import { Link } from 'react-router';
import CustomerSearch from './CustomerSearch';

export default function CustomerToolbar() {
  const moveBack = useBack();

  return (
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
        <CustomerSearch />

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
          sx={{ paddingBlock: '7px' }}
          LinkComponent={Link}
          to="/customers/create">
          <Typography>Add New Client</Typography>
        </Button>
      </Row>
    </Row>
  );
}
