import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import PageLoader from './components/PageLoader';

const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
const AppLayout = lazy(() => import('./layouts/Applayout'));

const Login = lazy(() => import('./pages/Auth'));
const ForgetPassword = lazy(() => import('./features/auth/ForgetPassword'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Qoutes = lazy(() => import('./features/qoutes'));
const Settings = lazy(() => import('./features/settings'));
const CustomerCreateModal = lazy(() =>
  import('./features/customers/CustomerCreateModal')
);
const About = lazy(() => import('./pages/About'));
const CustomersPage = lazy(() => import('./pages/Customers'));

const ProfileLayout = lazy(() => import('./layouts/ProfileLayout'));
const ProfilePage = lazy(() => import('./features/admin/Profile'));
const UpdatePasswordPage = lazy(() =>
  import('./features/admin/UpdatePassword')
);

const Invoices = lazy(() => import('./pages/Invoices'));
const InvoiceCreate = lazy(() => import('./pages/Invoices/Create'));
const InvoiceEdit = lazy(() => import('./pages/Invoices/Edit'));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Suspense
                fallback={<PageLoader size={80} />}
                key="login">
                <Login />
              </Suspense>
            }
          />

          <Route
            path="forget-password"
            element={<ForgetPassword />}
          />

          <Route
            element={
              <PrivateRoute>
                <Suspense fallback={<PageLoader size={80} />}>
                  <AppLayout />
                </Suspense>
              </PrivateRoute>
            }>
            <Route
              path="dashboard"
              element={
                <Suspense
                  fallback={<PageLoader size={60} />}
                  key="dashboard">
                  <Dashboard />
                </Suspense>
              }
            />

            <Route
              path="customers"
              element={
                <Suspense
                  fallback={<PageLoader size={60} />}
                  key="customers">
                  <CustomersPage />
                </Suspense>
              }>
              <Route
                path="create"
                element={<CustomerCreateModal />}
              />
            </Route>

            <Route path="invoices">
              <Route
                index
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="invoices">
                    <Invoices />
                  </Suspense>
                }
              />

              <Route
                path="create"
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="invoiceCreate">
                    <InvoiceCreate />
                  </Suspense>
                }
              />

              <Route
                path="edit/:editId"
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="invoiceEdit">
                    <InvoiceEdit />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="qoutes"
              element={
                <Suspense
                  fallback={<PageLoader size={60} />}
                  key="qoutes">
                  <Qoutes />
                </Suspense>
              }
            />

            <Route
              path="settings"
              element={
                <Suspense
                  fallback={<PageLoader size={60} />}
                  key="settings">
                  <Settings />
                </Suspense>
              }
            />

            <Route
              path="about"
              element={
                <Suspense
                  fallback={<PageLoader size={60} />}
                  key="about">
                  <About />
                </Suspense>
              }
            />

            <Route
              element={
                <Suspense
                  fallback={<PageLoader size={60} />}
                  key="profile">
                  <ProfileLayout />
                </Suspense>
              }>
              <Route
                index
                path="profile"
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="profile">
                    <ProfilePage />
                  </Suspense>
                }
              />

              <Route
                path="update-password"
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="updatepassword">
                    <UpdatePasswordPage />
                  </Suspense>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
