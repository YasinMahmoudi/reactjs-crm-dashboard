import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './pages/Auth';
import ForgetPassword from './features/auth/ForgetPassword';
import Dashboard from './pages/dashboard';
import AppLayout from './layouts/AppLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Login />}
        />

        <Route
          path="forget-password"
          element={<ForgetPassword />}
        />

        <Route element={<AppLayout />}>
          <Route
            path="dashboard"
            element={<Dashboard />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
