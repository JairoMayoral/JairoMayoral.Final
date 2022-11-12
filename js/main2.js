 //! Westworld t-shirts ONLINE


// //* LOG IN.
alert("BIENVENIDO !! Espero disfrutes tu tiempo en nuestra nueva WEB");

function ingreso(){
let usuario = prompt("Danos tu nombre de usuario");
let contrasenia = prompt("Ingresa tu contraseña");
 
for(i = 1; i <=1; i++){ 
if (usuario == "" && contrasenia == "" || usuario != "" && contrasenia == "" || usuario == "" && contrasenia !="") {
    alert("Completa los campos correctamente");
} else {
    alert (" Hola: " + usuario + " estas listo para comprar?");
} 
}
}

ingreso();


class item{
    constructor(nombre, precio){
        this.nombre= nombre;
        this.precio= precio;
    }
  }
  
  
  const temporada1 = new item("temporada1", 6000);
  const temporada2 = new item("temporada2", 6200);
  const temporada3 = new item("temporada3", 8800);
  const temporada4 = new item("temporada4", 7150);
  const temporada5 = new item("temporada5", 6500);

  console.log(temporada1);
  console.log(temporada2);
  console.log(temporada3);
  console.log(temporada4);
  console.log(temporada5);
  
  let temporada= prompt ("elige la remera de la temporada que te gusta")
  
  const arrayItem = [temporada1, temporada2, temporada3, temporada4, temporada5];
  console.log(arrayItem);
//   switch (key) {//   }

let carroDeComprasArrrayItem = [];
 
if(localStorage.getItem(" ")) {
  carroDeCompras = JSON.parse(localStorage.getItem("carroDeComprasArrrayItem"));
}

   localStorage.setItem("carroDeCompras", JSON.stringify(carroDeCompras));


  alert(("Estan es un producto NUEVO : ") + arrayItem[4]);

  alert("estos son los productos en Stock: " + arrayItem);
  
let indice = arrayItem.indexOf("Temporada3");
console.log(" La remera : " + indice);

console.log(("Estan es un producto NUEVO : ") + stockRemeras[4]);

  const tshirt= new producto (prompt("Elige una remera"), parseInt());
  alert(" Esta remera vale 6200")
  arrayItem.push(tshirt);
  console.log("agregar una remera: " + arrayItem );
  
  
  const arrayItemMenor8800= arrayItem.filter(producto => producto.precio < 8800);
  console.log("Productos con precio menor a 10000: ");
  console.log(arrayItemMenor8800);
  
  const totalprice= document.getElementById("total");
  let totalPrecio  = arrayItemMenor8800.reduce((acumulador,producto) => acumulador + producto.precio, 0);
  console.log("Precio total del carroDeCompras: ")
  console.log(totalPrecio);