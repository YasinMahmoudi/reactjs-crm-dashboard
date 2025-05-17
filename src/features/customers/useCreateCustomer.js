import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCustomerService } from '../../services/customers/customer';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

function useCreateCustomer() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createCustomer, isPending: isCreatingCustomer } = useMutation(
    {
      mutationFn: createCustomerService,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['customers'],
          exact: true,
        });

        toast.success('Customer created successfuly');
        
        navigate('/customers');
      },

      onError: (err) => {
        toast.error(err);
      },
    }
  );

  return { createCustomer, isCreatingCustomer };
}

export { useCreateCustomer };
