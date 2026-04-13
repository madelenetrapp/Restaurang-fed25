const response = await fetch('url?method=save', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key: "example-key",
    value: "example value"
  })
});
// If response.ok == true, the request succeeded

const response = await fetch('url?method=load&key=example-key', {
  method: 'GET'
});
const data = await response.json();
// If you use the wrong key, the API will return NULL