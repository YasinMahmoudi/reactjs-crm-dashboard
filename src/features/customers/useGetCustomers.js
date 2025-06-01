import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { getCustomersService } from '../../services/customers/customer';
import { useEffect, useRef } from 'react';

function useGetCustomers() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const abortControllerRef = useRef();

  // const { signal } = abortControllerRef.current;

  const query = searchParams.get('query') || null;

  const page = !searchParams.has('page') ? 1 : Number(searchParams.get('page'));

  // useEffect(() => {
  //   function handleAbortSignal() {
  //     queryClient.cancelQueries({
  //       queryKey: ['customers'],
  //     });

  //   }

  //   document.activeElement.addEventListener('keydown', handleAbortSignal);

  //   return () => {
  //     document.activeElement.removeEventListener('keydown', handleAbortSignal);
  //   };
  // }, [queryClient]);

  const handleError = (err) => {

    console.log(err)

    // let message = `[UNKNOWN_ERROR ${new Date().toISOString()}] ${JSON.stringify(
    //   err,
    //   Object.getOwnPropertyNames(err)
    // )}`;
    // if (err instanceof DOMException && err.name === 'AbortError') {
    //   message = `[REQUEST_ABORTED ${new Date().toISOString()}] ${err.message}`;
    // } else if (err instanceof Error) {
    //   message = `[FETCH_ERROR ${new Date().toISOString()}] ${err.message}`;
    //   return message;
    // }
  };

  const {
    data: { result, pagination, pagination: { pages } = {} } = {},
    isLoading: isLoadingCustomers,
    isError,
    error,
  } = useQuery({
    queryKey: ['customers', page, query],
    queryFn: () => {
      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      return getCustomersService({
        page,
        query,
        signal: abortController.signal,
      });
    },
  });

  useEffect(() => {
    if (isError) {
      handleError(error);
      console.log(error)
    }
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [isError, error]);

  // if (page < pages) {
  //   queryClient.prefetchQuery({
  //     queryKey: ['customers', page + 1, query],
  //     queryFn: () => getCustomersService({ page: page + 1, query }),
  //   });
  // }

  // if (page > 1)
  //   queryClient.prefetchQuery({
  //     queryKey: ['customers', page - 1, query],
  //     queryFn: () => getCustomersService({ page: page - 1, query }),
  //   });

  return {
    customers: result,
    pagination: pagination,
    isLoadingCustomers,
  };
}

export { useGetCustomers };
