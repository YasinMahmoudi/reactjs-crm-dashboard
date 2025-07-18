import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteInvoiceService } from '../../services/invoices';

function useDeleteInvoice() {
  const queryClient = useQueryClient();

  const { mutate: deleteInvoice, isPending: isDeletingInvoice } = useMutation(
    {
      mutationFn: (id) => deleteInvoiceService(id),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['invoices'],
        });

        toast.success('Invoice deleted successfuly');
      },

      onError: (err) => {
        toast.error(err);
      },
    }
  );

  return { deleteInvoice, isDeletingInvoice };
}

export { useDeleteInvoice };
