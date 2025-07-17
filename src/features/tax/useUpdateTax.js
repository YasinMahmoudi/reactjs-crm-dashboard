import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router';
import { updateTaxService } from '../../services/tax';

function useUpdateTax() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();

  const id = searchparams.get('id');

  const { mutate: updateTax, isPending: isUpdatingTax } = useMutation({
    mutationFn: (updatedData) => updateTaxService({ id, updatedData }),

    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['taxes'],
        }),
        queryClient.invalidateQueries({ queryKey: ['tax', id] }),
      ]);

      toast.success('Tax updated successfuly');

      navigate('/taxes');
    },

    onError: (err) => {
      toast.error(err);
    },
  });

  return { updateTax, isUpdatingTax };
}

export { useUpdateTax };
