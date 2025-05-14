const API_URL = 'http://localhost:8888/api';

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

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function verifyUserService() {
  try {
    const res = await fetch(
      `${API_URL}/verify-user`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );
    const data = await res.json();

    return data;
    
  } catch (error) {
    console.log(error);
  }
}
