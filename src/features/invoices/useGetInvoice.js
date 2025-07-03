import { useQuery } from '@tanstack/react-query';

import { useIsEditing } from '../../hooks/useIsEditing';
import { getInvoiceService } from '../../services/invoices';

function useGetInvoice() {
  const { editId } = useIsEditing();

  const { data: invoice = {}, isLoading: isLoadingInvoice } = useQuery({
    queryKey: ['invoice', editId],
    queryFn: () => getInvoiceService(editId),
    enabled: editId !== null && editId !== undefined,
  });

  return { invoice, isLoadingInvoice };
}

export { useGetInvoice };
