const API_URL ='https://forverkliga.se/JavaScript/api/jsonStore.php'              //vi har ingen api? länken leder till ett exempel
const KEY = 'menu'

async function loadMenu() {
  const responce = await fetch(`${API_URL}?method=load&key=${KEY}`)
  const data = await responce.json()
  return data ?? []
}
export {loadMenu}

async function saveMenu(menu) {
  const response = await fetch(`${API_URL}?method=save`, {   //method=save beror på vad api säger!
    method:'POST',                                          //detta beror på vad api säget; kan vara get, put osv!
    headers: {
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      key:KEY,               //key beror på vad api säger!
      value:menu             //value beror på vad api säger!
    })
  })
  return response.ok
}
export {saveMenu}


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

