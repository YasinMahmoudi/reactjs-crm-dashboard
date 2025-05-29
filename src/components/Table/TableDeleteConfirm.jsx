import DeleteConfirmModal from '../DeleteConfimModal';
import { useTable } from './TableContext/useTable';

TableDeleteConfirm.propTypes = {};

export default function TableDeleteConfirm() {
  const {
    isDeletingMultipleRecords,
    onDeleteMultipleRecords,
    title,
    selected,
    setSelected,
  } = useTable();

  const resourceName = title.slice(0, -1);

  const resetParams = () => setSelected([]);

  return (
    <DeleteConfirmModal
      onDelete={onDeleteMultipleRecords}
      isDeleting={isDeletingMultipleRecords}
      resourceName={resourceName}
      deleteMultipleOptions={{ params: selected, resetParams }}
    />
  );
}
