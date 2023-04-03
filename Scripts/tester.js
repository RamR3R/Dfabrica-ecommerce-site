const url = `https://dfabrica-data-app.onrender.com/users`;
let obj = {
    email
: 
"ram30101998@gmail.com",
firstname
: 
"Ramsundar",
lastname
: 
"Sivakumar",
password
: 
"123"
}
fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(json => console.log(json))
  .catch(error => console.error('Error:', error));
