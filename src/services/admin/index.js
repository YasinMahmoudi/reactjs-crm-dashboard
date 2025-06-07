import { API_URL } from '../../utils/constants';

export async function getAdminService(id) {
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 3000)
  // );

  try {
    const res = await fetch(`${API_URL}/admin/read/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data',
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

export async function updateAdminProfileService(updatedData) {
  
  try {
    const res = await fetch(`${API_URL}/admin/profile/update`, {
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
