


export function useTypeSort(list) {

  const menuTypeOrder = ["Starter", "Main", "Dessert", "Beer & Cider"];

  if (!list) return []
  const menuTypes = menuTypeOrder.filter(type =>
    list.some(item => item.type === type));


  return menuTypes

}


