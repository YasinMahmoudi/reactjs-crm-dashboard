import { API_URL } from '../../utils/constants';

export const LIMIT_ITEMS = 5;

// /api/invoice/list?equal=68330570227a0709cc7bd769&filter=client

export async function getInvoicesService({
  page = 1,
  query = '',
  clientQuery = '',
  signal,
}) {
  let fetchUrl;

  if (query) {
    fetchUrl = `${API_URL}/invoice/list?page=${page}&items=${LIMIT_ITEMS}&q=${query}}`;
  }

  if (!query) {
    fetchUrl = `${API_URL}/invoice/list?page=${page}&items=${LIMIT_ITEMS}`;
  }

  if(clientQuery) {
    fetchUrl = `${API_URL}/invoice/list?${clientQuery}`
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
    data: { client, date, expireDate, note, number, status, taxRate, year },
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
    taxRate : taxRate || 0,
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

export async function updateInvoiceService({ id, updatedData }) {
  // Extract necessary data from given invoice
  const {
    data: { client, date, expireDate, note, number, status, year, taxRate },
    items,
  } = updatedData;

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
    taxRate : taxRate || 0,
    year,
    items: modifiedItems,
  };

  try {
    const res = await fetch(`${API_URL}/invoice/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoiceData),
      credentials: 'include',
    });

    if (!res.ok) throw new Error(data.message);

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteInvoiceService(id) {
  try {
    const res = await fetch(`${API_URL}/invoice/delete/${id}`, {
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

export async function deleteManyInvoicesService(ids = []) {
  try {
    const res = await fetch(`${API_URL}/invoice/delete-many`, {
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
