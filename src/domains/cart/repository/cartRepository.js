const CART_KEY = 'cart'

export function getCartFromStorage() {
  const raw = localStorage.getItem(CART_KEY)
  return raw ? JSON.parse(raw) : []
}

export function saveCartToStorage(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}
