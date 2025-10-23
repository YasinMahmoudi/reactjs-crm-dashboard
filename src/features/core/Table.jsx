import EmptyResource from '../../components/EmptyResource';
import DataTable from '../../components/Table';

import { useDeleteData } from './useDeleteData';
import { useDeleteManyData } from './useDeleteManyData';
import { useGetPaginateData } from './useGetPaginateData';

export default function Table({
  resourceName = 'Data Table',
  children,
  options = {},
  hasCheckbox = true,
}) {
  const { dataKey, services, invalidateQueryKeys } = options;

  const { getPaginateDataService, deleteDataService, deleteManyDataService } =
    services;

  const { paginateData, pagination, isLoadingPaginateData } =
    useGetPaginateData({
      dataKey: dataKey,
      dataService: getPaginateDataService,
    });

  const { deleteData, isDeletingData } = useDeleteData({
    resourceName: resourceName,
    invalidateQueryKeys: invalidateQueryKeys,
    deleteService: deleteDataService,
  });

  const { deleteManyData, isDeletingManyData, isDeleteMultiple } =
    useDeleteManyData({
      resourceName: resourceName,
      invalidateQueryKeys: invalidateQueryKeys,
      apiService: deleteManyDataService,
    });

  if (paginateData?.length === 0)
    return <EmptyResource resourceName={resourceName} />;

  return (
    <>
      <DataTable
        state={isLoadingPaginateData}
        data={paginateData}
        pagination={pagination}
        hasToolbar={true}
        isDeletingMultipleRecords={
          isDeleteMultiple ? isDeletingManyData : isDeletingData
        }
        onDeleteMultipleRecords={isDeleteMultiple ? deleteManyData : deleteData}
        title={`${resourceName}s Table`}
        hasChechBox={hasCheckbox}>
        {children}
      </DataTable>
    </>
  );
}
