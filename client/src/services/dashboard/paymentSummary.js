import { API_URL } from '../../utils/constants';

export async function getPaymentSummaryService({ signal }) {
  try {
    const res = await fetch(`${API_URL}/payment/summary?currency=USD`, {
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
