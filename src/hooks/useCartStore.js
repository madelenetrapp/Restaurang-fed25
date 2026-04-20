import { useShallow } from 'zustand/shallow'
import { cartStore } from '../store/cartStore'

export const useCartStore = () => {

  return cartStore(
    useShallow((s) => ({
      cart: s.cart ?? [],
      totalPrice: s.totalPrice ?? 0,
      addToCart: s.addToCart,
      removeItem: s.removeItem,
      getItemByName: s.getItemByName,
    }))
  )
}