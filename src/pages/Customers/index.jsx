import { Outlet } from 'react-router';
import BorderBox from '../../components/BorderBox';

export default function CustomersPage() {
  return (
    <BorderBox>
      <Outlet />
    </BorderBox>
  );
}
