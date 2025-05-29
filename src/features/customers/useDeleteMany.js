import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteManyCustomersService } from '../../services/customers/customer';

function useDeleteManyCustomers() {
  const queryClient = useQueryClient();

  const { mutate: deleteManyCustomers, isPending: isDeletingManyCustomers } =
    useMutation({
      mutationFn: deleteManyCustomersService,

      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: ['customers'],
        });

        const deletCount = data.result.deletedCount;

        const message = ` ${
          deletCount > 0 ? `${deletCount} customers ` : 'customer'
        }`;

        toast.success(`${message} deleted successfuly`);
      },

      onError: (err) => {
        toast.error(err);
      },
    });

  return { deleteManyCustomers, isDeletingManyCustomers };
}

export { useDeleteManyCustomers };
