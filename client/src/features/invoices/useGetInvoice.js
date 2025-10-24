import { useSuspenseQuery } from '@tanstack/react-query';

import { useIsEditing } from '../../hooks/useIsEditing';
import { getInvoiceService } from '../../services/invoices';

function useGetInvoice() {
  const { editId, readId, isEditing } = useIsEditing();

  const selectedId = isEditing ? editId : readId;

  const { data: invoice = {} } = useSuspenseQuery({
    queryKey: ['invoice', selectedId],
    queryFn: () => getInvoiceService(selectedId),
    enabled: selectedId !== null && selectedId !== undefined,
  });

  return { invoice };
}

export { useGetInvoice };

