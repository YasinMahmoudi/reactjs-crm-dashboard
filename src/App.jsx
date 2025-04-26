import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './pages/Auth';
import ForgetPassword from './features/auth/ForgetPassword';
import Dashboard from './pages/dashboard';
import AppLayout from './layouts/Applayout';
import Customers from './features/customers';
import Invoices from './features/invoices';
import Qoutes from './features/qoutes';
import Settings from './features/settings';
import About from './pages/About';

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

          <Route
            path="customers"
            element={<Customers />}
          />

          <Route
            path="invoices"
            element={<Invoices />}
          />

          <Route
            path="qoutes"
            element={<Qoutes />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

          <Route
            path="about"
            element={<About />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
