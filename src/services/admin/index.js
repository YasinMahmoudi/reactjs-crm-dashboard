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
  const formData = new FormData();

  formData.append('name', updatedData.name);
  formData.append('surname', updatedData.surname);
  formData.append('email', updatedData.email);

  if (updatedData.photo) {
    formData.append('file', updatedData.photo);
  }

  try {
    const res = await fetch(`${API_URL}/admin/profile/update`, {
      method: 'PATCH',
      body: formData,
      credentials: 'include',
    });

    if (!res.ok) throw new Error(data.message);

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function updateAdminPasswordService(updatedPassword) {
  try {
    const res = await fetch(`${API_URL}/admin/profile/password`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPassword),
      credentials: 'include',
    });

    if (!res.ok) throw new Error(data.message);

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}
