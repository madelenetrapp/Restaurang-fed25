import { loadMenu, saveMenu } from '../api/api.js'
import { menuList } from '../api/menuList.js'
import { menuStore } from '../store/menuStore.js'

export function delayMenuLoader() {
  setTimeout(menuLoader, 800)
}
export async function menuLoader() {

  const state = menuStore.getState() //rename state to store TODO

  //does zustand have a menu in store? return it
  if (state.menu.length > 0) {
    return state.menu
  }

  const storedMenu = await loadMenu()

  //does the API have a menu? save and return it
  if (storedMenu?.length) {
    state.initMenu(storedMenu) //set menu istället för init
    return storedMenu
  }

  //nothing found, therefor save default in API and in store and return it.
  saveMenu(menuList) //TODO rename to saveMenuToApi
  state.initMenu(menuList) //TODO rename to setMenu
  return menuList
}