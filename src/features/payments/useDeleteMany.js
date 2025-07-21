import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteManyPaymentsService } from '../../services/payment';

function useDeleteManyPayments() {
  const queryClient = useQueryClient();

  const { mutate: deleteManyPayments, isPending: isDeletingManyPayments } =
    useMutation({
      mutationFn: deleteManyPaymentsService,

      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: ['payments'],
        });

        const deletCount = data.result.deletedCount;

        const message = ` ${
          deletCount > 0 ? `${deletCount} payments ` : 'payment'
        }`;

        toast.success(`${message} deleted successfuly`);
      },

      onError: (err) => {
        toast.error(err);
      },
    });

  return { deleteManyPayments, isDeletingManyPayments };
}

export { useDeleteManyPayments };

