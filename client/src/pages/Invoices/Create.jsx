import { Divider } from '@mui/material';
import InvoiceCreateUpdateForm from '../../features/invoices/InvoiceCreateUpdateForm';
import InvoiceCreateUpdateToolbar from '../../features/invoices/InvoiceCreateUpdateToolbar';

export default function Create() {
  return (
    <>
      <InvoiceCreateUpdateToolbar />

      <Divider />

      <InvoiceCreateUpdateForm />
    </>
  );
}
