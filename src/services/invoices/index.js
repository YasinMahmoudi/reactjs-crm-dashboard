import { API_URL } from '../../utils/constants';

export const LIMIT_ITEMS = 5;

export async function getInvoicesService({ page = 1, query = '', signal }) {
  const searchableFields = ['name'];

  let fetchUrl;

  if (query) {
    fetchUrl = `${API_URL}/invoice/list?page=${page}&items=${LIMIT_ITEMS}&q=${query}&fields=${[
      ...searchableFields,
    ]}`;
  }

  if (!query) {
    fetchUrl = `${API_URL}/invoice/list?page=${page}&items=${LIMIT_ITEMS}`;
  }

  try {
    const res = await fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      signal,
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    return error;
  }
}

export async function createInvoiceService(newInvoice) {
  // Extract necessary data from given invoice
  const {
    data: { client, date, expireDate, note, number, status, tax, year },
    items,
  } = newInvoice;

  // Change items structure
  const modifiedItems = items.map((item) => ({
    itemName: item.name,
    price: item.price,
    quantity: item.qty,
    total: item.totlaItemPrice,
    description: item.description,
  }));

  // Create a brand new invoice object
  const invoiceData = {
    client,
    date,
    expiredDate: expireDate,
    notes: note,
    number: +number,
    status,
    taxRate: tax,
    year,
    items: modifiedItems,
  };

  try {
    const res = await fetch(`${API_URL}/invoice/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoiceData),
      credentials: 'include',
    });

    if (!res.ok)
      throw new Error(
        'Something happened on the server ! please try again later'
      );

    const data = await res.json();

    if (!data.success) throw new Error(data.message);

    return data;
  } catch (error) {
    return error;
  }
}

export async function getInvoiceService(id) {
  try {
    const res = await fetch(`${API_URL}/invoice/read/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!res.ok) throw new Error(data.message);

    const data = await res.json();

    return data.result;
  } catch (error) {
    return error;
  }
}

export async function updateCustomerService({ id, updatedData }) {
  try {
    const res = await fetch(`${API_URL}/client/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
      credentials: 'include',
    });

    if (!res.ok) throw new Error(data.message);

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteCustomerService(id) {
  try {
    const res = await fetch(`${API_URL}/client/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteManyCustomersService(ids = []) {
  try {
    const res = await fetch(`${API_URL}/client/delete-many`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ids),
      credentials: 'include',
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    return error;
  }
}
