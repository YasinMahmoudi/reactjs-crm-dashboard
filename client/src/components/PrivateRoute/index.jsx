import { useEffect, useTransition } from 'react';
import { useNavigate } from 'react-router';
import { useVerifyUser } from '../../features/auth/useVerifyUser';



export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const [isPending] = useTransition();


  const { hasToken, isLoading } = useVerifyUser();

  useEffect(
    function () {
      if (!hasToken && !isLoading) navigate('/');
    },
    [hasToken, isLoading, navigate]
  );

  if (isPending) return <h1> Loading ... </h1>;

  return children;
}
