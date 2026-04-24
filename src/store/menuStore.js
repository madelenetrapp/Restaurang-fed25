import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { saveMenuToApi } from '../api/api';

export const menuStore = create(
  immer((set, get) => ({

    // 1. SETS MENU (sets full list in store)
    menu: [],

    menuTypes: ["Starter", "Main", "Dessert", "Beer & Cider"],

    setMenu: (list) => {
      set(s => {
        s.menu = list.filter(i => i.name && i.type)
      })
    },

    setMenuTypes: (list) => {
      set(s => {
        const allTypes = list.map(i => i.type)
        const uniqueTypes = allTypes.filter((type, index) =>
          allTypes.indexOf(type) === index)
        s.menuTypes = uniqueTypes
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

    addMenuType: (type) => {
      set(s => {
        if (!type) return
        if (!s.menuTypes.find(i => i.type === type)) {
          s.menuTypes.push(type)
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