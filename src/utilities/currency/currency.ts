export const currency = (value: number): string => {
  return new Intl.NumberFormat('en-UK', {
    currency: 'GBP',
    style: 'currency',
  }).format(value);
};
