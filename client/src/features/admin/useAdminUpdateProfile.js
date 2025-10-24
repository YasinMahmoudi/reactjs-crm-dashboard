import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateAdminProfileService } from '../../services/admin';

function useAdminUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate: updateAdminProfile, isPending: isUpdatingAdminProfile } =
    useMutation({
      mutationFn: updateAdminProfileService,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['admin'],
        });

        toast.success('Admin profile updated successfuly');
      },

      onError: (err) => {
        toast.error(err);
      },
    });

  return { updateAdminProfile, isUpdatingAdminProfile };
}

export { useAdminUpdateProfile };
