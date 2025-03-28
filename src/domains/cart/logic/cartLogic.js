export function addToCart(cart, product) {
    const existing = cart.find(item => item.id === product.id)
  
    if (existing) {
      existing.qty += 1
    } else {
      cart.push({ ...product, qty: 1 })
    }
  
    return cart
  }
  
  export function calculateCartTotal(cart) {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  }
  