export const formatPrice = (price: number, currency: string) => {
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
    }).format(price)
  } catch {
    return `${currency} ${price.toLocaleString()}`
  }
}

export const formatNumber = (num: number) => {
  return num.toLocaleString(undefined, { minimumFractionDigits: 1 })
}
