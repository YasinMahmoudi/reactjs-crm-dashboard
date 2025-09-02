import { API_URL } from '../../utils/constants';

export const LIMIT_ITEMS = 5;

export async function getCustomersService({ page = 1, query = '', signal }) {
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 2000)
  // );

  const searchableFields = ['name'];

  let fetchUrl;

  if (query) {
    fetchUrl = `${API_URL}/client/list?page=${page}&items=${LIMIT_ITEMS}&q=${query}&fields=${[
      ...searchableFields,
    ]}`;
  }

  if (!query) {
    fetchUrl = `${API_URL}/client/list?page=${page}&items=${LIMIT_ITEMS}`;
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

export async function getAllCustomersService({ signal }) {
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 2000)
  // );

  try {
    const res = await fetch(`${API_URL}/client/list`, {
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

export async function createCustomerService(newCustomer) {
  try {
    const res = await fetch(`${API_URL}/client/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCustomer),
      credentials: 'include',
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    return error;
  }
}

export async function getCustomerService(id) {
  if (!id) return null;

  try {
    const res = await fetch(`${API_URL}/client/read/${id}`, {
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

export async function searchCustomersService({ query = '', signal }) {
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 2000)
  // );

  const searchableFields = ['name'];

  let fetchUrl;

  if (query) {
    fetchUrl = `${API_URL}/client/search?q=${query}&fields=${[
      ...searchableFields,
    ]}`;
  }

  if (!query) {
    fetchUrl = `${API_URL}/client/search`;
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
