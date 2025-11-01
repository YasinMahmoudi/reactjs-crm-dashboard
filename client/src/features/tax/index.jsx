import { Box } from '@mui/material';
import TaxTable from './Table';
import Toolbar from '../core/Toolbar';
import SearchField from '../core/SearchField';


const tableBoxStyle = { mt: 3 };

export default function Tax() {
  return (
    <>
      <Toolbar
        buttonLabel="Add New Tax"
        to="/taxes/create">
        <SearchField id="taxSearchInput" />
      </Toolbar>

      <Box sx={tableBoxStyle}>
        <TaxTable />
      </Box>
    </>
  );
}
