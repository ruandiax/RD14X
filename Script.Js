const checkbox = document.getElementById('checkbox');

checkbox.addEventListener("change",()=> {

  // Change the Theme of the WebSite

  document.body.classList.toggle('dark');

});