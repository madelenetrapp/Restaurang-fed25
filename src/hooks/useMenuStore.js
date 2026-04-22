import { useShallow } from 'zustand/shallow'
import { menuStore } from '../store/menuStore.js'

export const useMenuStore = () => {

  return menuStore(
    useShallow((s) => ({
      menu: s.menu ?? [],
      addMenuItem: s.addMenuItem,
      removeMenuItem: s.removeMenuItem,
      editMenuItem: s.editMenuItem,
      getMenuItemByName: s.getMenuItemByName,
    }))
  )
}