import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

import { useIsEditing } from '../../hooks/useIsEditing';
import { updateInvoiceService } from '../../services/invoices';

function useUpdateInvoice() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { editId } = useIsEditing();

  const { mutate: updateInvoice, isPending: isUpdatingInvoice } = useMutation({
    mutationFn: (updatedData) =>
      updateInvoiceService({ id: editId, updatedData }),

    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['invoices'],
        }),
        queryClient.invalidateQueries({ queryKey: ['invoice', editId] }),
      ]);

      toast.success('Invoice updated successfuly');

      navigate('/invoices');
    },

    onError: (err) => {
      toast.error(err);
    },
  });

  return { updateInvoice, isUpdatingInvoice };
}

export { useUpdateInvoice };
