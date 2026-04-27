/** Returns a list with the types of food that are actually being served. */
export function useTypeSort(list, types) {


  if (!list) return []
  const menuTypes = types.filter(type =>
    list.some(item => item.type === type));

  return menuTypes
}


