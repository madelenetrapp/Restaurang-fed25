import { menuList } from "./menuList";

const API_URL = 'https://forverkliga.se/JavaScript/api/jsonStore.php'              //vi har ingen api? länken leder till ett exempel
const KEY = 'mums'

async function loadMenu() {
  try {
    const response = await fetch(`${API_URL}?method=load&key=${KEY}`);
    const data = await response.json();
    console.log(data);
    return data ?? [];
  } catch (error) {
    console.error("någit gick fel:", error);
    return [];
  }
}
export { loadMenu }

async function saveMenu() {
  try {
    const response = await fetch(`${API_URL}?method=save`, {   //method=save beror på vad api säger!
      method: 'POST',                                          //detta beror på vad api säget; kan vara get, put osv!
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: KEY,               //key beror på vad api säger!
        value: menuList             //value beror på vad api säger!
      })
    })
     console.log("save ok:", response.ok);
    return response.ok
  } catch (error) {
    console.error("Kunde inte spara:", error);
    return false;
  }
}
export { saveMenu }


// Detta är ett exempel:
// const response = await fetch('url?method=save', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     key: "example-key",
//     value: "example value"
//   })
// });
// // If response.ok == true, the request succeeded

// const response = await fetch('url?method=load&key=example-key', {
//   method: 'GET'
// });
// const data = await response.json();
// // If you use the wrong key, the API will return NULL

