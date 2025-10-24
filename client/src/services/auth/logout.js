import { API_URL } from "../../utils/constants";

export async function logoutService() {
  try {
    const res = await fetch(
      `${API_URL}/logout`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
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
