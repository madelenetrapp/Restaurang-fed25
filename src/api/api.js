import { defaultMenuList } from "../utils/defaultMenuList";

const API_URL = 'https://forverkliga.se/JavaScript/api/jsonStore.php'
const KEY = 'mums'

async function loadMenuFromApi() {
  try {
    const response = await fetch(`${API_URL}?method=load&key=${KEY}`);
    const data = await response.json();

    return data ?? [];
  } catch (error) {

    return [];
  }
}

async function saveMenuToApi(menu) {
  try {
    const response = await fetch(`${API_URL}?method=save`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: KEY,
        value: menu ?? defaultMenuList
      })
    });

    console.log("save ok:", response.ok);
    return response.ok
  } catch (error) {

    return false;
  }


}
export { saveMenuToApi, loadMenuFromApi }