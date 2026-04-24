import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { saveMenuToApi } from '../api/api';

export const menuStore = create(
  immer((set, get) => ({

    // 1. SETS MENU (sets full list in store)
    menu: [],
    setMenu: (list) => {
      set(s => {
        s.menu = list.filter(i => i.name && i.type)
      })
    },

    // 2. ADD ITEM
    addMenuItem: (item) => {
      set(s => {
        if (!item.name || !item.type) return
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
    editMenuItem: (originalName, newItem) => {
      set(s => {
        if (!newItem.name || !newItem.type) return
        s.menu = s.menu.map((item) =>
          item.name === originalName ? newItem : item
        )
      })
    },
    // OPTIONAL: get an item with id as key
    //Användbar för att skapa cart beställningen
    getMenuItemByName: (name) => {
      return get().menu.find((item) => item.name === name);
    },
    getMenuItemByType: (type) => {
      return get().menu.find((item) => item.type === type);
    },

    saveZustandMenuToApi: () => {
      const editedMenuList = get().menu
      saveMenuToApi(editedMenuList)
    }
  }))
)