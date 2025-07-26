import { API_URL } from '../../utils/constants';

export const LIMIT_ITEMS = 5;

export async function getPaymentsService({ page = 1, query = '', signal }) {
  const searchableFields = ['name'];

  let fetchUrl;

  if (query) {
    fetchUrl = `${API_URL}/payment/list?page=${page}&items=${LIMIT_ITEMS}&q=${query}&fields=${[
      ...searchableFields,
    ]}`;
  }

  if (!query) {
    fetchUrl = `${API_URL}/payment/list?page=${page}&items=${LIMIT_ITEMS}`;
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

export async function getPaymentService(id) {
  try {
    const res = await fetch(`${API_URL}/payment/read/${id}`, {
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

export async function createPaymentService(newPayment) {
  try {
    const res = await fetch(`${API_URL}/payment/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPayment),
      credentials: 'include',
    });

    if (!res.ok) throw new Error(data.message);

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function updatePaymentService({ id, updatedData }) {
  try {
    const res = await fetch(`${API_URL}/payment/update/${id}`, {
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

export async function deletePaymentService(id) {
  try {
    const res = await fetch(`${API_URL}/payment/delete/${id}`, {
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

export async function deleteManyPaymentsService(ids = []) {
  try {
    const res = await fetch(`${API_URL}/payment/delete-many`, {
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
