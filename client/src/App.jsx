import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import PageLoader from './components/PageLoader';

const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
const AppLayout = lazy(() => import('./layouts/Applayout'));

const Login = lazy(() => import('./pages/Auth'));
const ForgetPassword = lazy(() => import('./features/auth/ForgetPassword'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
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
const InvoiceRecordPayment = lazy(() =>
  import('./pages/Invoices/RecordPayment')
);

const Taxes = lazy(() => import('./pages/Taxes'));
const TaxCreate = lazy(() => import('./features/tax/TaxCreate'));

const PaymentModes = lazy(() => import('./pages/PaymentModes'));
const PaymentModeCreate = lazy(() =>
  import('./features/payment-mode/PaymentModeCreate')
);

const Payments = lazy(() => import('./pages/Payments'));
const PaymentRead = lazy(() => import('./pages/Payments/Read'));
const PaymentEdit = lazy(() => import('./pages/Payments/Edit'));

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

              <Route
                path="pay/:readId"
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="invoicePaymentRecord">
                    <InvoiceRecordPayment />
                  </Suspense>
                }
              />
            </Route>

            <Route path="payment">
              <Route
                index
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="payments">
                    <Payments />
                  </Suspense>
                }
              />

              <Route
                path="read/:readId"
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="paymentRead">
                    <PaymentRead />
                  </Suspense>
                }
              />

              <Route
                path="edit/:editId"
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="paymentEdit">
                    <PaymentEdit />
                  </Suspense>
                }
              />

              <Route
                path="mode"
                element={
                  <Suspense
                    fallback={<PageLoader size={60} />}
                    key="paymentMode">
                    <PaymentModes />
                  </Suspense>
                }>
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
