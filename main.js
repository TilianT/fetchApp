$(function() {

  var menu = $('.navigation ul');
  var content = $('.main .container');

  fetch('https://my-json-server.typicode.com/TilianT/fetchTestData/db')
    .then( res => {
      return res.json();
    } ) 
    .then( res => {
      res.menu.map( item => {
        menu.append(`<li><a href="#/">${item}</a></li>`)
      })
      res.content.map( item => {
        content.append(`<p>${item}</p>`)
      })
      console.log(res);
    })

})