const task = document.getElementById("task");//llama a los ID
const list = document.querySelector(".lists")//llama las clases

function clicked() {
    if (task.value==="") {//agregar condicionales
        alert("Ingrece sus actividades que desea realizar, FLOJO")//se pone la alerta
    }else{
        let li = document.createElement("li")//por que cambia
        li.innerHTML = task.value;//se manda llamar la variable, se le agrega para ingresar elementos o etiquetas desde HTML
        list.appendChild (li);//se agregan mas
        task.value="";
        let span =  document.createElement("span") //iconos
        span.innerHTML = "x";
        li.appendChild(span)
    }
    saveData();
}
list.addEventListener("click", (evento)=>{
    if (evento.target.tagName === "LI") {
        evento.target.classList.toggle("checked");        
    }else if (evento.target.tagName === "SPAN"){
        evento.target.parentElement.remove();
    }
    saveData();
})
function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function getData(){
    list.innerHTML = localStorage.getItem("data");
}
getData();