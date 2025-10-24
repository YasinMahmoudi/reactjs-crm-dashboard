import { useGetInvoice } from "../../features/invoices/useGetInvoice";

export function InvoiceInfoValue({ keyValue, formater }) {
  const { invoice } = useGetInvoice();

  const modifiedKey = keyValue.split('.').map((val) => val);

  const value = modifiedKey.reduce((acc, key) => acc[key], invoice);

  if (formater) return formater(value);

  return value;
}
