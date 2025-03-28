import { useCartStore } from '../store/cartStore'
import { addProductToCart } from '../service/cartService'

export function handleAddToCart(product) {
  const updatedCart = addProductToCart(product)
  useCartStore().setItems(updatedCart)
}
