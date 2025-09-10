import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useDeleteManyData({
  resourceName = '',
  invalidateQueryKeys = [],
  apiService,
}) {
  const queryClient = useQueryClient();

  const { mutate: deleteManyData, isPending: isDeletingManyData } = useMutation(
    {
      mutationFn: apiService,

      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: invalidateQueryKeys,
        });

        const deletCount = data.result.deletedCount;

        const message = ` ${
          deletCount > 0 ? `${deletCount} ${resourceName}s ` : resourceName
        }`;

        toast.success(`${message} deleted successfuly`);
      },

      onError: (err) => {
        toast.error(err);
      },
    }
  );

  return { deleteManyData, isDeletingManyData };
}

export { useDeleteManyData };

