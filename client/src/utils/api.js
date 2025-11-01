import { API_URL } from './constants';

const LIMIT_ITEMS = 5;

/**
 * Makes a GET request to API_URL/entPoint with query parameters page, items, q and fields.
 * @param {Object} options - An object containing the following properties:
 *   - page: The page number to fetch. Defaults to 1.
 *   - query: The search query. Defaults to an empty string.
 *   - searchableFields: An array of fields to search in. Defaults to ['name'].
 *   - paginateItems: The number of items to fetch per page. Defaults to LIMIT_ITEMS.
 *   - entPoint: The endpoint to fetch from. Defaults to an empty string.
 *   - signal: An AbortSignal to cancel the request.
 * @returns {Promise} - A promise that resolves to the response data or rejects with an error.
 */
export async function getPaginatedRecords({
  page = 1,
  query = '',
  searchableFields = ['name'],
  paginateItems = LIMIT_ITEMS,
  entPoint = '',
  signal,
}) {
  let fetchUrl;

  if (query) {
    fetchUrl = `${API_URL}/${entPoint}?page=${page}&items=${paginateItems}&q=${query}&fields=${[
      ...searchableFields,
    ]}`;
  }

  if (!query) {
    fetchUrl = `${API_URL}/${entPoint}?page=${page}&items=${paginateItems}`;
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

/**
 * Fetch all records from the specified endpoint.
 * @param {object} options - object containing parameters for the request.
 * @param {string} options.endPoint - endpoint to fetch records from.
 * @param {AbortSignal} options.signal - signal to abort the request.
 * @returns {Promise<object>} - promise that resolves to an object containing the result of the request.
 * @throws {Error} - error that occurred during the request.
 */
export async function getAllRecords({ endPoint = '', signal }) {
  try {
    const res = await fetch(`${API_URL}/${endPoint}`, {
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

/**
 * Fetch a record from the specified endpoint.
 * @param {object} options - object containing parameters for the request.
 * @param {string} options.endPoint - endpoint to fetch record from.
 * @param {string} options.id - id of the record to fetch.
 * @returns {Promise<object>} - promise that resolves to an object containing the result of the request.
 * @throws {Error} - error that occurred during the request.
 */
export async function getRecord({ endPoint = '', id }) {
  if (!id) return null;

  try {
    const res = await fetch(`${API_URL}/${endPoint}/${id}`, {
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

/**
 * Create a new record in the specified endpoint.
 * @param {string} endPoint - endpoint to create the record in.
 * @param {object} newData - object containing the data to create the record with.
 * @returns {Promise<object>} - promise that resolves to an object containing the result of the request.
 * @throws {Error} - error that occurred during the request.
 */
export async function createRecord(endPoint = '', newData) {
  try {
    const res = await fetch(`${API_URL}/${endPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
      credentials: 'include',
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    return error;
  }
}

export async function updateRecord({ endPoint = '', id, updatedData }) {
  try {
    const res = await fetch(`${API_URL}/${endPoint}/${id}`, {
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

export async function deleteRecord({ endPoint = '', id }) {
  try {
    const res = await fetch(`${API_URL}/${endPoint}/${id}`, {
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

export async function deleteManyRecords({ endPoint = '', ids = [] }) {
  try {
    const res = await fetch(`${API_URL}/${endPoint}`, {
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

export async function search({
  endPoint = '',
  query = '',
  signal,
  searchableFields = ['name'],
}) {
  let fetchUrl;

  if (query) {
    fetchUrl = `${API_URL}/${endPoint}?q=${query}&fields=${[
      ...searchableFields,
    ]}`;
  }

  if (!query) {
    fetchUrl = `${API_URL}/${endPoint}`;
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
