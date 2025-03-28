import { getCartFromStorage, saveCartToStorage } from '../repository/cartRepository'
import { addToCart } from '../logic/cartLogic'

export function addProductToCart(product) {
  const cart = getCartFromStorage()
  const updatedCart = addToCart(cart, product)
  saveCartToStorage(updatedCart)
  return updatedCart
}
