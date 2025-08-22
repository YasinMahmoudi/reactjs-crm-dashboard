import { useSuspenseQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { getInvoiceSummaryService } from '../../services/dashboard/invoiceSummary';

function useInvoicesSummary() {
  const abortControllerRef = useRef();

  const {
    data: { result },
  } = useSuspenseQuery({
    queryKey: ['invoicesSummary'],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return getInvoiceSummaryService({
        signal: abortControllerRef.current.signal,
      });
    },
  });

  return {
    invoices: result,
  };
}

export { useInvoicesSummary };
