import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const menuStore = create(
  immer((set, get) => ({

    // 1. INIT (sets full list in store)
    menu: [],
    initMenu: (list) => {
      set(s => {
        s.menu = list
      })
    },

    // 2. ADD ITEM
    addToMenu: (item) => {
      set(s => {
        if (!s.menu.find(i => i.name === item.name)) {
          s.menu.push(item)
        }
      })
    }, //TODO rename to one name covention.. 
    //TODO rename to removeMenuItem
    // 3. REMOVE ITEM
    removeItem: (name) => {
      set(s => {
        s.menu = s.menu.filter((item) => item.name !== name)
      })
    },

    // 4. EDIT ITEM
    editItem: (newItem) => {
      set(s => {
        s.menu = s.menu.map((item) =>
          item.name === newItem.name ? newItem : item
        )
      })
    },
    // OPTIONAL: get an item with id as key
    //Användbar för att skapa cart beställningen
    getItemByName: (name) => {
      return get().menu.find((item) => item.name === name);
    }
  }))
)