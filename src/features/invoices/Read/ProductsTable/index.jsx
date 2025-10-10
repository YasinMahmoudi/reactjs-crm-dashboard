import { Suspense } from 'react';
import InvoiceProductTableSkeleton from '../../../../components/Skeletons/invoices/InvoiceProductTableSkeleton';
import Head from './Head';
import ProductRows from './ProductRows';
import SimpleTable from '../../../../components/SimpleTable';

export default function InvoiceProductsTable() {
  return (
    <SimpleTable>
      <Head />

      <Suspense fallback={<InvoiceProductTableSkeleton />}>
        <ProductRows />
      </Suspense>
    </SimpleTable>
  );
}
