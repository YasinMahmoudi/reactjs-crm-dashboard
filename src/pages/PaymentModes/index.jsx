import { Outlet } from 'react-router';
import PaymentMode from '../../features/payment-mode';

export default function PaymentModes() {
  return (
    <>
      <PaymentMode />

      <Outlet />
    </>
  );
}
