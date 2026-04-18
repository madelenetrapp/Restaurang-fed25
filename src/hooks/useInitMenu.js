// import { useShallow } from 'zustand/shallow';
// import { loadMenu, saveMenu } from '../api/api.js';
// import { menuList } from '../api/menuList.js';
// import { menuStore } from '../store/menuStore.js';
// import { useEffect } from 'react';


// export function useInitMenu() {

//   useEffect(() => {
//     const state = menuStore.getState()

//     if (state.menu.length > 0) return

//     const storedMenu = loadMenu()

//     if (storedMenu?.length) {
//       state.initMenu(storedMenu)
//     } else {
//       saveMenu(menuList)
//       state.initMenu(menuList)
//     }
//   }, [])
//   return menuStore(useShallow((s) => s.menu))
// }