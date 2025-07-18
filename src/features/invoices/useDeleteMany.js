import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteManyInvoicesService } from '../../services/invoices';

function useDeleteManyInvoices() {
  const queryClient = useQueryClient();

  const { mutate: deleteManyInvoices, isPending: isDeletingManyInvoices } =
    useMutation({
      mutationFn: deleteManyInvoicesService,

      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: ['invoices'],
        });

        const deletCount = data.result.deletedCount;

        const message = ` ${
          deletCount > 0 ? `${deletCount} invoices ` : 'invoice'
        }`;

        toast.success(`${message} deleted successfuly`);
      },

      onError: (err) => {
        toast.error(err);
      },
    });

  return { deleteManyInvoices, isDeletingManyInvoices };
}

export { useDeleteManyInvoices };
