import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { createPaymentModeService } from '../../services/payment-mode';

function useCreatePaymentMode() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createPaymentMode, isPending: isCreatingPaymentMode } = useMutation(
    {
      mutationFn: createPaymentModeService,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['paymentModes'],
        });

        toast.success('Payment Mode created successfuly');
        
        navigate('/payment/mode');
      },

      onError: (err) => {
        toast.error(err);
      },
    }
  );

  return { createPaymentMode, isCreatingPaymentMode };
}

export { useCreatePaymentMode };

