const usuario = document.getElementById("nombre");
const contraseña = document.getElementById("contraseña");
const  btn = document.querySelector(".btn"); 


btn.onclick = (preventDefault) => {
 fetch("aca va la api la concha de tu madre")
.then(response => response.json())
.then(data => traerData(data))
function traerData(data){
        if(usuario.value === data.name && contraseña.value === data.gender){
        console.log("Usuario y contraseña correctos");
    }else{
        console.log("Usuario o contraseña incorrectos");
    }
}
}
