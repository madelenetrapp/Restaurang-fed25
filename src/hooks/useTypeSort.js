

/** Returns a list with the types of food that are actually being served. */
export function useTypeSort(list) {

  //TODO: move to menu store
  const menuTypeOrder = ["Starter", "Main", "Dessert", "Beer & Cider"];

  if (!list) return []
  const menuTypes = menuTypeOrder.filter(type =>
    list.some(item => item.type === type));


  return menuTypes

}


