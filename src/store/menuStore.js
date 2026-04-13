import { create } from 'zustand';

export const useMenuStore = create((set, get) => ({

  menu: [],

  // 1. INIT (replace full list from API)
  initMenu: (ApiList) =>
    set(() => ({
      menu: ApiList
    })),


  // 2. ADD ITEM
  addToMenu: (item) =>
    set((state) => ({
      menu: [...state.menu, item]
    })),

  // 3. REMOVE ITEM
  removeItem: (id) =>
    set((state) => ({
      menu: state.menu.filter((item) => item.id !== id),
    })),

  // 4. EDIT ITEM
  editItem: (id, updatedData) =>
    set((state) => ({
      menu: state.menu.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item)
    })),

  // OPTIONAL: get an item with id as key
  getItemById: (id) => {
    return get().menu.find((item) => item.id === id);
  },
})
)