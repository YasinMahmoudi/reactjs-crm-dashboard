import { useQuery } from '@tanstack/react-query';
import { verifyUserService } from '../../services/auth/login';

function useVerifyUser() {
  const { data: user, isPending: isLoading } = useQuery({
    queryKey: ['userToken'],
    queryFn: verifyUserService,
  });

  return { hasToken: user?.token === true, isLoading };
}

export { useVerifyUser };
