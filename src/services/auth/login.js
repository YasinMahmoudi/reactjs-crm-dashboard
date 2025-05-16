import { API_URL } from '../../utils/constants';

export async function loginService(credentials) {
  try {
    const res = await fetch(
      `${API_URL}/login?timestamp=${new Date().getTime()}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include',
      }
    );
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) {
    return error;
  }
}

export async function verifyUserService() {
  try {
    const res = await fetch(`${API_URL}/verify-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}
