import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateAdminPasswordService } from '../../services/admin';

function useAdminUpdatePassword() {
  const queryClient = useQueryClient();

  const { mutate: updateAdminPassword, isPending: isUpdatingAdminPassword } =
    useMutation({
      mutationFn: updateAdminPasswordService,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['admin'],
        });

        toast.success('Admin password updated successfuly');
      },

      onError: (err) => {
        toast.error(err);
      },
    });

  return { updateAdminPassword, isUpdatingAdminPassword };
}

export { useAdminUpdatePassword };

