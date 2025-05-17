import { API_URL } from '../../utils/constants';

export async function getCustomersService() {
  try {
    const res = await fetch(`${API_URL}/client/list`, {
      method: 'GET',
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
