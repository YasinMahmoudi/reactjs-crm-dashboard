import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginService } from '../../services/auth/login';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

function useLogin() {
  const navigate = useNavigate();
  const queryClinet = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: (credentials) => loginService(credentials),

    onSuccess() {
      queryClinet.invalidateQueries({ queryKey: ['userToken'] });

      navigate('/dashboard');
      toast.success('Logged in successfuly .');
    },

    onError(err) {
      toast.error(err.message);
    },
  });

  return { login, isPending };
}

export { useLogin };
