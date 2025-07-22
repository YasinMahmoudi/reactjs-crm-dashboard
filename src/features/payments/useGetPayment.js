import { useQuery } from '@tanstack/react-query';

import { useIsEditing } from '../../hooks/useIsEditing';
import { getPaymentService } from '../../services/payment';

function useGetPayment() {
  const { editId, readId, isEditing } = useIsEditing();

  const selectedId = isEditing ? editId : readId;

  const { data: payment = {}, isLoading: isLoadingPayment } = useQuery({
    queryKey: ['payment', selectedId],
    queryFn: () => getPaymentService(selectedId),
    enabled: selectedId !== null && selectedId !== undefined,
  });

  return { payment, isLoadingPayment };
}

export { useGetPayment };

