import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { createPaymentService } from '../../services/payment';
import { useIsEditing } from '../../hooks/useIsEditing';

function useCreateInvoicepayment() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { readId } = useIsEditing();

  const { mutate: createInvoicePayment, isPending: isCreatingInvoicePayment } =
    useMutation({
      mutationFn: createPaymentService,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['invoices'],
        });

        queryClient.invalidateQueries({
          queryKey: ['invoice', readId],
        });

        toast.success('Payment created successfuly');

        navigate('/invoices');
      },

      onError: (err) => {
        toast.error(err?.message);
      },
    });

  return { createInvoicePayment, isCreatingInvoicePayment };
}

export { useCreateInvoicepayment };
