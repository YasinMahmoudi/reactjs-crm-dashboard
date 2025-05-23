import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AppThemeProvider from './components/Themeprovider/index.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 24 * 60 * 60,
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />

        <ReactQueryDevtools />
      </QueryClientProvider>

      <Toaster />
    </AppThemeProvider>
  </StrictMode>
);
