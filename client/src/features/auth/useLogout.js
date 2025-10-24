import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { logoutService } from '../../services/auth/logout';

function useLogout() {
  const navigate = useNavigate();
  const queryClinet = useQueryClient();

  const { mutate: logout, isPending: isLogingout } = useMutation({
    mutationFn: logoutService,

    onSuccess() {
      queryClinet.invalidateQueries({ queryKey: ['userToken'] });

      navigate('/');
      toast.success('Logged out in successfuly .');
    },

    onError(err) {
      toast.error(err.message);
    },
  });

  return { logout, isLogingout };
}

export { useLogout };
