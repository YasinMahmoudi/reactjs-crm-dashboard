import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { createInvoiceService } from '../../services/invoices';

function useCreateInvoice() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createInvoice, isPending: isCreatingInvoice } = useMutation({
    mutationFn: createInvoiceService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['invoices'],
      });

      toast.success('Invoice created successfuly');

      navigate('/invoices');
    },

    onError: (err) => {
      toast.error(err?.message);
    },
  });

  return { createInvoice, isCreatingInvoice };
}

export { useCreateInvoice };
