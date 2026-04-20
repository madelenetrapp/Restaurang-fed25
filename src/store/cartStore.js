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
        if (!s.cart.find(i => i.name === item.name)) {
          s.cart.push(item) 
        //   Add price to total price
        totalPrice = totalPrice + item.price 
        }
      })
    },

    // 3. REMOVE ITEM
    removeItem: (name) => {
        set(s => {
            // Remove price from total price
            s.cart = s.cart.filter((item) => item.name !== name)
    })
    },

    
    // OPTIONAL: get an item with id as key
    //Användbar för att skapa cart beställningen
    getItemByName: (name) => {
      return get().menu.find((item) => item.name === name);
    }
  }))
)