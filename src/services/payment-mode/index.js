import { API_URL } from '../../utils/constants';

export const LIMIT_ITEMS = 5;

export async function getPaymentModesService({ page = 1, query = '', signal }) {
  const searchableFields = ['name'];

  let fetchUrl;

  if (query) {
    fetchUrl = `${API_URL}/paymentMode/list?page=${page}&items=${LIMIT_ITEMS}&q=${query}&fields=${[
      ...searchableFields,
    ]}`;
  }

  if (!query) {
    fetchUrl = `${API_URL}/paymentMode/list?page=${page}&items=${LIMIT_ITEMS}`;
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

export async function getAllPaymentModesService({ signal }) {
  try {
    const res = await fetch(`${API_URL}/paymentMode/list`, {
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

export async function createPaymentModeService(newPaymentMode) {
  try {
    const res = await fetch(`${API_URL}/paymentMode/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPaymentMode),
      credentials: 'include',
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    return error;
  }
}

export async function getPaymentModeService(id) {
  try {
    const res = await fetch(`${API_URL}/paymentMode/read/${id}`, {
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

export async function updatePaymentModeService({ id, updatedData }) {
  try {
    const res = await fetch(`${API_URL}/paymentMode/update/${id}`, {
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
