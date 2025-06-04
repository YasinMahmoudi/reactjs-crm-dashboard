import { API_URL } from '../../utils/constants';

export async function getAdminService(id) {
//   await new Promise((resolve) =>
//     setTimeout(() => {
//       resolve();
//     }, 2000)
//   );

  try {
    const res = await fetch(`${API_URL}/admin/read/${id}`, {
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
