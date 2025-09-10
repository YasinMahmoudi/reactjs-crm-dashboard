import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useDeleteData({
  resourceName = '',
  invalidateQueryKeys = [],
  deleteService,
}) {
  const queryClient = useQueryClient();

  const { mutate: deleteData, isPending: isDeletingData } = useMutation({
    mutationFn: (id) => deleteService(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: invalidateQueryKeys,
      });

      toast.success(`${resourceName} deleted successfuly`);
    },

    onError: (err) => {
      toast.error(err);
    },
  });

  return { deleteData, isDeletingData };
}

export { useDeleteData };
