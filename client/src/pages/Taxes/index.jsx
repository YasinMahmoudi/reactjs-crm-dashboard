import { Outlet } from 'react-router';
import Tax from '../../features/tax';

export default function Taxes() {
  return (
    <>
      <Tax />

      <Outlet />
    </>
  );
}
