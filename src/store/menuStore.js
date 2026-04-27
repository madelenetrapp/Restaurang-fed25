import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { saveMenuToApi } from '../api/api';

export const menuStore = create(
  immer((set, get) => ({

    menu: [],

    menuTypes: ["Starter", "Main", "Dessert", "Beer & Cider"],

    // 1. sets a full menu in the store
    setMenu: (list) => {
      set(s => {
        s.menu = list.filter(i => i.name && i.type)
        get().setMenuTypes(list)
      })
    },

    //2. sets the menuTypes in the store
    setMenuTypes: (list) => {
      set(s => {
        const allTypes = list.map(i => i.type)
        const uniqueTypes = allTypes.filter((type, index) =>
          allTypes.indexOf(type) === index)
        s.menuTypes = uniqueTypes
      })
    },

    //3. reorders menuTypes. takes a type and 'up' or 'down' parameter
    reOrderMenuType: (type, direction) => {
      set(s => {
        const index = s.menuTypes.indexOf(type)
        if (index === -1) return
        const newIndex = direction === 'up' ? index - 1 : index + 1
        if (newIndex < 0 || newIndex >= s.menuTypes.length) return
          // swap 
          ;[s.menuTypes[index], s.menuTypes[newIndex]] = [s.menuTypes[newIndex], s.menuTypes[index]]
      })
    },

    // 4. ADD ITEM
    addMenuItem: (item) => {
      set(s => {
        if (!item.name || !item.type) return
        if (!s.menu.find(i => i.name === item.name)) {
          s.menu.push(item)
        }
      })
    },

    // 5. ADD TYPE
    addMenuType: (type) => {
      set(s => {
        if (!type) return
        if (!s.menuTypes.find(i => i.type === type)) {
          s.menuTypes.push(type)
        }
      })
    },

    // 6. REMOVE ITEM
    removeMenuItem: (name) => {
      set(s => {
        s.menu = s.menu.filter((item) => item.name !== name)
      })
    },

    // 7. EDIT ITEM
    editMenuItem: (originalName, newItem) => {
      set(s => {
        if (!newItem.name || !newItem.type) return
        s.menu = s.menu.map((item) =>
          item.name === originalName ? newItem : item
        )
      })
    },

    // 8. 9. gets a menu item using name param
    getMenuItemByName: (name) => {
      return get().menu.find((item) => item.name === name);
    },
    getMenuItemByType: (type) => {
      return get().menu.find((item) => item.type === type);
    },

    //10. saves zustand
    saveZustandMenuToApi: () => {
      const editedMenuList = get().menu
      saveMenuToApi(editedMenuList)
    }
  }))
)