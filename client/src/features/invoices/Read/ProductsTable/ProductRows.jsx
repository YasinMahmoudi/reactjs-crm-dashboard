import SimpleTable from '../../../../components/SimpleTable';
import InvoiceReadProductRow from './Row';
import { useGetInvoice } from '../../useGetInvoice';


export default function ProductRows() {
  const { invoice } = useGetInvoice();

  const products = invoice?.items;

  return (
    <SimpleTable.Body
      items={products}
      render={(product) => (
        <InvoiceReadProductRow
          key={product._id}
          product={product}
        />
      )}
    />
  );
}
