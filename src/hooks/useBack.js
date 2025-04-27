import { useNavigate } from 'react-router';

export function useBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
