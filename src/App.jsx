import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import PageLoader from './components/PageLoader';

const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
const AppLayout = lazy(() => import('./layouts/Applayout'));

const Login = lazy(() => import('./pages/Auth'));
const ForgetPassword = lazy(() => import('./features/auth/ForgetPassword'));
const Dashboard = lazy(() => import('./pages/dashboard'));
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
const InvoiceRead = lazy(() => import('./pages/Invoices/Read'));

const Taxes = lazy(() => import('./pages/Taxes'));
const TaxCreate = lazy(() => import('./features/tax/TaxCreate'));

const PaymentModes = lazy(() => import('./pages/PaymentModes'));
const PaymentModeCreate = lazy(() => import('./features/payment-mode/PaymentModeCreate'));

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
                path="read/:readId"
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="invoiceRead">
                    <InvoiceRead />
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

            <Route path="payment">
              <Route
                path="mode"
                element={<PaymentModes />}>
                <Route
                  path="create"
                  element={<PaymentModeCreate />}
                />
              </Route>
            </Route>

            <Route
              path="taxes"
              element={
                <Suspense
                  fallback={<PageLoader size={60} />}
                  key="taxes">
                  <Taxes />
                </Suspense>
              }>
              <Route
                path="create"
                element={<TaxCreate />}
              />
            </Route>

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
