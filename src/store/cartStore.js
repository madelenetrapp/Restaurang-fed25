import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const cartStore = create(
  immer((set, get) => ({

    // 1. INIT (sets full list in store)
    cart: [],
    totalPrice: 0,

    clearCart: () => {
      set(s => {
        s.cart = []
        s.totalPrice = 0
      })
    },

    // 2. ADD ITEM
    addCartItem: (item) => {
      set(s => {
        const existing = s.cart.find(i => i.name === item.name);
        if (existing) {
          console.log(existing.quantity)
          existing.quantity += 1;
        } else {
          s.cart.push({ ...item, quantity: 1 });
        }
        s.totalPrice += Number(item.price);
        console.log(s.cart)
      })
    },

    //TODO rename to removeCartItem

    // 3. REMOVE ITEM
    removeCartItem: (name) => {
      set(s => {
        const existing = s.cart.find(i => i.name === name);
        if (!existing) return;

        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          s.cart = s.cart.filter(i => i.name !== name);
        }
        s.totalPrice -= Number(existing.price)
      })
    },


    // OPTIONAL: get an item with id as key
    //Användbar för att skapa cart beställningen
    getCartItemByName: (name) => {
      return get().cart.find((item) => item.name === name);
    }
  }))
)