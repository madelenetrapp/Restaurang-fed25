import { loadMenuFromApi, saveMenuToApi } from '../api/api.js'
import { menuList } from '../api/menuList.js'
import { menuStore } from '../store/menuStore.js'

export function delayMenuLoader() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menuLoader())
    }, 2000)
  })
}

export async function menuLoader() {

  const store = menuStore.getState()

  //does zustand have a menu in store? return it
  if (store.menu.length > 0) {
    return store.menu
  }

  const storedMenu = await loadMenuFromApi()

  //does the API have a menu? save and return it
  if (storedMenu?.length) {
    store.setMenu(storedMenu)
    return storedMenu
  }

  //nothing found, therefor save default in API and in store and return it.
  saveMenuToApi(menuList)
  store.setMenu(menuList)
  return menuList
}