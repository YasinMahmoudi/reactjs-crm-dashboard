import { useGetPayment } from "../../features/payments/useGetPayment";

export function PaymentInfoValue({ keyValue, formater }) {
  const { payment } = useGetPayment();

  let modifiedKey, value;

  if (keyValue.includes('-')) {
    modifiedKey = keyValue.split('-').map((val) => val.trim());

    const [firstValue, secondValue] = modifiedKey;

    const first = firstValue.split('.').map((val) => val);
    const second = secondValue.split('.').map((val) => val);

    value =
      first.reduce((acc, key) => acc[key], payment) -
      second.reduce((acc, key) => acc[key], payment);
  } else {
    modifiedKey = keyValue.split('.').map((val) => val);

    value = modifiedKey.reduce((acc, key) => acc[key], payment);
  }

  if (formater) return formater(value);

  return value;
}
