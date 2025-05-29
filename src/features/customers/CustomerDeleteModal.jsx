import DeleteConfirmModal from '../../components/DeleteConfimModal';
import { useDeleteCustomer } from './useDeleteCustomer';

export default function CustomerDeleteModal() {
  const { deleteCustomer, isDeletingCustomer } = useDeleteCustomer();

  return (
    <DeleteConfirmModal
      onDelete={deleteCustomer}
      isDeleting={isDeletingCustomer}
      resourceName='customer'
    />
  );
}
