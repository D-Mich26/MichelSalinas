fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json => {
  console.log(json.data);
  const markup = json.data.map(el => {
    return `
    <li class = "card-container"> 
        <div class = "image-container">
          <img class = "ronda" src = "${el.avatar}">

        </div>
        <div class = "nombre-cont">
          <span class = "nombre"><a href="cliente-indi.html">${el.first_name}</a></span>
          <span class = "apellido"><a href="cliente-indi.html">${el.last_name}<a/></span>

        </div>
        <p class = "email">${el.email}</p>
        <br>
        <br>
        <br>
    </li>
  `
  });
  document.querySelector('.list-container').innerHTML = markup.join('');

})