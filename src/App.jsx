import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './pages/Auth';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}
