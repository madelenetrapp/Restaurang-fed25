import { useShallow } from 'zustand/shallow'
import { cartStore } from '../store/cartStore.js'

export const useCartStore = () => {

  return cartStore(
    useShallow((s) => ({
      cart: s.cart ?? [],
      totalPrice: s.totalPrice ?? 0,
      totalItems: s.totalItems ?? 0,
      clearCart: s.clearCart,
      addCartItem: s.addCartItem,
      removeCartItem: s.removeCartItem,
      getCartItemByName: s.getCartItemByName,
    }))
  )
}