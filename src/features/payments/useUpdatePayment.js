import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

import { useIsEditing } from '../../hooks/useIsEditing';
import { updatePaymentService } from '../../services/payment';

function useUpdatePayment() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { editId } = useIsEditing();

  const { mutate: updatePayment, isPending: isUpdatingpayment } = useMutation({
    mutationFn: (updatedData) =>
      updatePaymentService({ id: editId, updatedData }),

    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['payments'],
        }),
        queryClient.invalidateQueries({ queryKey: ['payment', editId] }),
      ]);

      toast.success('Payment updated successfuly');

      navigate('/payments');
    },

    onError: (err) => {
      toast.error(err);
    },
  });

  return { updatePayment, isUpdatingpayment };
}

export { useUpdatePayment };
