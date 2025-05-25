import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCustomerService } from '../../services/customers/customer';

function useDeleteCustomer() {
  const queryClient = useQueryClient();

  const { mutate: deleteCustomer, isPending: isDeletingCustomer } = useMutation(
    {
      mutationFn: (id) => deleteCustomerService(id),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['customers'],
        });

        toast.success('Customer deleted successfuly');
      },

      onError: (err) => {
        toast.error(err);
      },
    }
  );

  return { deleteCustomer, isDeletingCustomer };
}

export { useDeleteCustomer };
