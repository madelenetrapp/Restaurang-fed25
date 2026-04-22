import { useShallow } from 'zustand/shallow'
import { cartStore } from '../store/cartStore'

export const useCartStore = () => {

  return cartStore(
    useShallow((s) => ({
      cart: s.cart ?? [],
      totalPrice: s.totalPrice ?? 0,
      addCartItem: s.addCartItem,
      removeCartItem: s.removeCartItem,
      getCartItemByName: s.getCartItemByName,
    }))
  )
}