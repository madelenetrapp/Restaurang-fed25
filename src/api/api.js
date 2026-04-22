import { menuList } from "./menuList";

const API_URL = 'https://forverkliga.se/JavaScript/api/jsonStore.php'
const KEY = 'mums'

async function loadMenuFromApi() {
  try {
    const response = await fetch(`${API_URL}?method=load&key=${KEY}`);
    const data = await response.json();
    // console.log(data);
    return data ?? [];
  } catch (error) { //TODO ta bort console.logs och error i catch om de inte ens används.. @madde from Andreas
    // console.error("någit gick fel:", error);
    return [];
  }
}

async function saveMenuToApi() {
  try {
    const response = await fetch(`${API_URL}?method=save`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: KEY,
        value: menuList
      })
    })
    console.log("save ok:", response.ok);
    return response.ok
  } catch (error) {
    // console.error("Kunde inte spara:", error);
    return false;
  }


}
export { saveMenuToApi, loadMenuFromApi }