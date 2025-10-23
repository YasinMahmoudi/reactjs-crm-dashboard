import { Box } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import SearchableClients from '../../../components/SearchableClients';


export default function PaymentSearch() {
  const { control } = useForm();

  return (
    <Box
      component="form"
      sx={{
        order: { xs: '3', sm: '0' },
        flexGrow: { xs: '1', sm: 'initial' },
        marginTop: { xs: '8px', sm: '0' },
        width: { xs: '100%', sm: 'auto' },
      }}>
      <Controller
        name="client"
        control={control}
        render={(field) => <SearchableClients field={field} />}
      />
    </Box>
  );
}
