import { menuList } from "./menuList";

const API_URL = 'https://forverkliga.se/JavaScript/api/jsonStore.php'              
const KEY = 'mums'

async function loadMenu() {
  try {
    const response = await fetch(`${API_URL}?method=load&key=${KEY}`);
    const data = await response.json();
    // console.log(data);
    return data ?? [];
  } catch (error) {
    // console.error("någit gick fel:", error);
    return [];
  }
}

async function saveMenu() {
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
export { saveMenu, loadMenu }


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

