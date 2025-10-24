import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router';
import { updateCustomerService } from '../../services/customers/customer';

function useUpdateCustomer() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();

  const id = searchparams.get('id');

  const { mutate: updateCustomer, isPending: isUpdatingCustomer } = useMutation(
    {
      mutationFn: (updatedData) => updateCustomerService({ id, updatedData }),

      onSuccess: () => {
        Promise.all([
          queryClient.invalidateQueries({
            queryKey: ['customers'],
          }),
          queryClient.invalidateQueries({ queryKey: ['customer', id] }),
        ]);
        
        toast.success('Customer updated successfuly');

        navigate('/customers');
      },

      onError: (err) => {
        toast.error(err);
      },
    }
  );

  return { updateCustomer, isUpdatingCustomer };
}

export { useUpdateCustomer };
