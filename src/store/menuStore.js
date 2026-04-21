import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const menuStore = create(
  immer((set, get) => ({

    // 1. SETS MENU (sets full list in store)
    menu: [],
    setMenu: (list) => {
      set(s => {
        s.menu = list
      })
    },

    // 2. ADD ITEM
    addMenuItem: (item) => {
      set(s => {
        if (!s.menu.find(i => i.name === item.name)) {
          s.menu.push(item)
        }
      })
    },

    // 3. REMOVE ITEM
    removeMenuItem: (name) => {
      set(s => {
        s.menu = s.menu.filter((item) => item.name !== name)
      })
    },

    // 4. EDIT ITEM
    editMenuItem: (newItem) => {
      set(s => {
        s.menu = s.menu.map((item) =>
          item.name === newItem.name ? newItem : item
        )
      })
    },
    // OPTIONAL: get an item with id as key
    //Användbar för att skapa cart beställningen
    getMenuItemByName: (name) => {
      return get().menu.find((item) => item.name === name);
    }
  }))
)