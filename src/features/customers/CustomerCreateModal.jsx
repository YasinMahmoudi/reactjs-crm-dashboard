import { useSearchParams } from 'react-router';
import EnhancedModal from '../../components/Modal';
import CustomerCreateForm from './CustomerCreateForm';
import { Suspense } from 'react';
import CusyomerCreateFormSkeleton from '../../components/Skeletons/customers/CusyomerCreateFormSkeleton';

export default function CustomerCreateModal() {
  const [searchParams] = useSearchParams();
  const isEditing = searchParams.get('edit') === 'true';

  return (
    <EnhancedModal title={isEditing ? `Edit customer` : 'Add new customer'}>
      <Suspense fallback={<CusyomerCreateFormSkeleton />}>
        <CustomerCreateForm />
      </Suspense>
    </EnhancedModal>
  );
}
