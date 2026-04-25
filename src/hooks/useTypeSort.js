// import { menuStore } from '../store/menuStore';


/** Returns a list with the types of food that are actually being served. */
export function useTypeSort(list, types) {

  // const store = menuStore.getState()
  //TODO: move to menu store
  // const menuTypeOrder = ["Starter", "Main", "Dessert", "Beer & Cider"];

  if (!list) return []
  const menuTypes = types.filter(type =>
    list.some(item => item.type === type));

  return menuTypes
}


