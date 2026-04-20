import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const cartStore = create(
  immer((set, get) => ({

    // 1. INIT (sets full list in store)
    cart: [],
    totalPrice: 0,

    // 2. ADD ITEM
    addToCart: (item) => {
      set(s => {
        const existing = s.cart.find(i => i.name === item.name);
        if (existing) {
          console.log(existing.quantity)
          existing.quantity += 1;
        } else {
          s.cart.push({ ...item, quantity: 1 });
        }
        s.totalPrice += item.price;
        console.log(s.cart)
      });
    },

    // 3. REMOVE ITEM
    removeItem: (name) => {
      set(s => {
        const existing = s.cart.find(i => i.name === name);
        if (!existing) return;

        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          s.cart = s.cart.filter(i => i.name !== name);
        }
        s.totalPrice -= existing.price
      })
    },


    // OPTIONAL: get an item with id as key
    //Användbar för att skapa cart beställningen
    getItemByName: (name) => {
      return get().menu.find((item) => item.name === name);
    }
  }))
)

// getItemByName: (name) => {
//     return get().cart.find(item => item.name === name);
// }