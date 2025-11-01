import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

function useCreateData({
  respurceName = '',
  dataKey = '',
  dataService,
  redirectLink = '/',
}) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  

  const { mutate: createData, isPending: isCreatingData } = useMutation({
    mutationFn: dataService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [dataKey],
      });

      toast.success(`${respurceName} created successfuly`);

      navigate(redirectLink);
    },

    onError: (err) => {
      toast.error(err);
    },
  });

  return { createData, isCreatingData };
}

export { useCreateData };
