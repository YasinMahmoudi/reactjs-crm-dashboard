import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { createTaxService } from '../../services/tax';

function useCreateTax() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createTax, isPending: isCreatingTax } = useMutation(
    {
      mutationFn: createTaxService,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['taxes'],
        });

        toast.success('Tax created successfuly');
        
        navigate('/taxes');
      },

      onError: (err) => {
        toast.error(err);
      },
    }
  );

  return { createTax, isCreatingTax };
}

export { useCreateTax };

