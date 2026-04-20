import { loadMenu, saveMenu } from '../api/api.js'
import { menuList } from '../api/menuList.js'
import { menuStore } from '../store/menuStore.js'

export async function menuLoader() {

  await new Promise(r => setTimeout(r, 800)) // 👈 force delay

  const state = menuStore.getState()

  if (state.menu.length > 0) {
    return state.menu
  }

  const storedMenu = loadMenu()

  if (storedMenu?.length) {
    state.initMenu(storedMenu)
    return storedMenu
  }

  saveMenu(menuList)
  state.initMenu(menuList)
  return menuList
}