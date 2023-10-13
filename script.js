let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    // target.elements[0].value // Value del nombre
    // target.elements[1].value // Value del mail
    // target.elements[2].value // Value del comment
    
    // localStorage.setItem("Nombre", `${event.target[0].value}`)
    // localStorage.setItem("Email", `${event.target[1].value}`)
    // localStorage.setItem("Observaciones", `${event.target[2].value}`)

    localStorage.setItem("user", JSON.stringify({
        Nombre: `${event.target[0].value}`,
        Email:`${event.target[1].value}`,
        Observaciones: `${event.target[2].value}`
    }))
        
    let user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("datos-container").innerHTML = `${user.Nombre}, ${user.Email}, ${user.Observaciones}`
})


//BORRAR TODOS LOS DATOS DEL LOCAL STORAGE
document.getElementById("borrarAll").addEventListener("click", function(){
  localStorage.clear();
  console.log("Datos borrados");
});

//BORRAR UN UNICO USUARIO
document.querySelector(".borrarUser-form").addEventListener("submit", function (event) {
  // event.preventDefault();
  // console.log(event);
  let userToDelete = event.target[0].value
  let userData = JSON.parse(localStorage.getItem("user"))
  

    if (userToDelete == userData.Nombre) {
      localStorage.removeItem("user")
    }
  
})




