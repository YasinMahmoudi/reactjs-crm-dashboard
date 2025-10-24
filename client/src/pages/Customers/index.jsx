import { Outlet } from 'react-router';
import BorderBox from '../../components/BorderBox';
import Customers from '../../features/customers';

export default function CustomersPage() {
  return (
    <BorderBox>
      <Customers />

      <Outlet />
    </BorderBox>
  );
}
