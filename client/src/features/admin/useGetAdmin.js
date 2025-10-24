import { useQuery } from '@tanstack/react-query';
import { getAdminService } from '../../services/admin';
import { useVerifyUser } from '../auth/useVerifyUser';

function useGetAdmin() {
  const { id } = useVerifyUser();

  const { data: admin, isLoading: isLoadingAdmin } = useQuery({
    queryKey: ['admin', id],
    queryFn: () => getAdminService(id),
    enabled: !!id,
  });

  return { admin, isLoadingAdmin };
}

export { useGetAdmin };
