import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './pages/Auth';
import ForgetPassword from './features/auth/ForgetPassword';

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
      </Routes>
    </BrowserRouter>
  );
}
