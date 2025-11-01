import {
  createRecord,
  deleteManyRecords,
  deleteRecord,
  getPaginatedRecords,
  getRecord,
  search,
  updateRecord,
} from '../../utils/api';

export const LIMIT_ITEMS = 5;

export async function getCustomersService({ page = 1, query = '', signal }) {
  const data = await getPaginatedRecords({
    entPoint: 'client/list',
    page,
    query,
    signal,
  });

  return data;
}

export async function getAllCustomersService({ signal }) {
  const data = await getPaginatedRecords({
    entPoint: 'client/list',
    signal,
  });

  return data;
}

export async function createCustomerService(newCustomer) {
  const data = await createRecord('client/create', newCustomer);

  return data;
}

export async function getCustomerService(id) {
  const data = await getRecord({
    endPoint: 'client/read',
    id,
  });

  return data;
}

export async function updateCustomerService({ id, updatedData }) {
  const data = await updateRecord({
    endPoint: 'client/update',
    id,
    updatedData,
  });

  return data;
}

export async function deleteCustomerService(id) {
  const data = await deleteRecord({
    endPoint: 'client/delete',
    id,
  });

  return data;
}

export async function deleteManyCustomersService(ids = []) {
  const data = await deleteManyRecords({
    endPoint: 'client/delete-many',
    ids,
  });

  return data;
}

export async function searchCustomersService({ query = '', signal }) {
  const data = await search({
    endPoint: 'client/search',
    signal,
    query,
  });

  return data;
}
