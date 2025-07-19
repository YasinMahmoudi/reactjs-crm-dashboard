import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router';
import { updatePaymentModeService } from '../../services/payment-mode';

function useUpdatePaymentMode() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();

  const id = searchparams.get('id');

  const { mutate: updatePaymentMode, isPending: isUpdatingPaymentMode } = useMutation({
    mutationFn: (updatedData) => updatePaymentModeService({ id, updatedData }),

    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['paymentModes'],
        }),
        queryClient.invalidateQueries({ queryKey: ['paymentMode', id] }),
      ]);

      toast.success('Payment Mode updated successfuly');

      navigate('/payment/mode');
    },

    onError: (err) => {
      toast.error(err);
    },
  });

  return { updatePaymentMode, isUpdatingPaymentMode };
}

export { useUpdatePaymentMode };

