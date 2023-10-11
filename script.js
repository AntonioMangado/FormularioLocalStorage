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
// let userDatos= Object.values(event.target.elements.value);
    
// for (let i = 0; i < userDatos.length; i++) {
//     console.log(userDatos[i])
// }
// 


/*let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
  };
  
  let valores = Object.values(perro); // valores = ["Scott", "Negro", true, 5];
  for(let i=0; i< valores.length; i++){
    console.log(valores[i]);
  }
  /*
  "Scott"
  "Negro"
  true
  5
  */

/*
  let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
  };
  
  for(const [key, value] of Object.entries(perro)){
    console.log(value)
  }
  
  /*salida:
  "Scott"
  "Negro"
  true
  5
  */