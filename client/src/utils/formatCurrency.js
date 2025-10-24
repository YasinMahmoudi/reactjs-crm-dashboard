const locale = navigator.language || 'en-Us';

export function formatCurrency(number) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
  }).format(number);
}
