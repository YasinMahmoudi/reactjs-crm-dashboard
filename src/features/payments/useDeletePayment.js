import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deletePaymentService } from '../../services/payment';

function useDeletePayment() {
  const queryClient = useQueryClient();

  const { mutate: deletePayment, isPending: isDeletingPayment } = useMutation(
    {
      mutationFn: (id) => deletePaymentService(id),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['payments'],
        });

        toast.success('Payment deleted successfuly');
      },

      onError: (err) => {
        toast.error(err);
      },
    }
  );

  return { deletePayment, isDeletingPayment };
}

export { useDeletePayment };

