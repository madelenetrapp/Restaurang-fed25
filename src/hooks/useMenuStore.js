import { useShallow } from 'zustand/shallow'
import { menuStore } from '../store/menuStore.js'

export const useMenuStore = () => {

  return menuStore(
    useShallow((s) => ({
      menu: s.menu ?? [],
      menuTypes: s.menuTypes ?? [],
      setMenu: s.setMenu,
      addMenuItem: s.addMenuItem,
      addMenuType: s.addMenuType,
      reOrderMenuType: s.reOrderMenuType,
      removeMenuItem: s.removeMenuItem,
      editMenuItem: s.editMenuItem,
      getMenuItemByName: s.getMenuItemByName,
      getMenuItemByType: s.getMenuItemByType,
      saveZustandMenuToApi: s.saveZustandMenuToApi
    }))
  )
}