//JS LADO DE SERVIDOR V8.0

// Variable -> contenedor de informacion

//var people = 45 tradicionalmente
// let y const actualmente

// tipos de datos
let data = 42; //number
let data2 = "Jim"; //string
let data3 = false; //booolean
let data4; //undefined
let data5 = null; //null
let data6 = "@"; //char

console.log(data);

//Tipos de datos compuestos
let data7 = ["Peter", "John", "Carmen"]; //array
let data8 = (person = {
  //objetos
  name: "John",
  city: "Quito",
});

// Strings - cadenas de caracteres
// propiedades - metodos
let passwordLuigi = "12345Luigi";
console.log(passwordLuigi.length);
console.log(passwordLuigi.trim());
console.log(passwordLuigi.includes("3"));
console.log(passwordLuigi.toLocaleLowerCase());
console.log(passwordLuigi.toLocaleUpperCase());

// ES6 - nuevas caracteristicas
//Template Strings

let gamePricePS5 = "200.35"
let gamePriceXBOX = 100.55

//CASTING
console.log(+gamePricePS5+gamePriceXBOX);

// Orden de ejecucion de los operadores (* / + - ** ())

let monedasMario = 500
let monedasYoshi = 1000

// ES6 - operador ternario
monedasMario <= monedasYoshi ? console.log("Gana Yoshi") : console.log("Gana Mario");

let nombreJugador //undefined
!nombreJugador ? console.log("Provide a nickname") : console.log("Welcome user");

// Valores Falso (falsy) y Verdadero (truthy)

console.log(false); //falsy
console.log(0); //falsy
console.log(""); //falsy
console.log(null); //falsy
console.log(undefined); //falsy

console.log(true); //truthy

// Comparacion estricta ===
let vidasPrincesaPeach = "6"
vidasPrincesaPeach === 6 ? console.log("Princesa pasa de nivel") : console.log("Pierde nivel")


// LOOPS

const goals = ["Completar-nivel", "Conseguir-monedas", "Derrotar-Bowser", "Pasar-Reino"]
goals.forEach((goal) => {console.log(goal)})

// simplificado 
// goals.forEach(console.log())

// TEMARIO NUEVO
goals.map((goal => console.log(goal)))
newGoals.map(goal => goal.toLocaleUpperCase())
console.log(goals);
console.log(newGoals);

// FUNCIONES DECLARADAS

function getGokuAvatar(){
  console.log("photo/avatar/goku.png");
}

getGokuAvatar()

// FUNCIONES EXPRESADAS

const prepararGokuBatalla = function(){
  console.log("Goku esta listo para pelear")
}

prepararGokuBatalla()

// Funcion anonima y autoejecutadas
(function(){
  console.log("Trunks viene del futuro")
})


// Argumentos
const validarEmailGoku = function(email,token){
  console.log('El token ${token} aumento los poderes de goku');
}

validarEmailGoku("goku@gmail.com", "semilla123")

const validarTokenVegeta = function(token="semilla"){
  console.log('El token ${token} aumento los poderes de vegeta');
}

validarTokenVegeta()

// Retorno
function retornoCapitulo(){
  // return "Nuevo Enemigo aparecio"
  // return 89
  // return true
  // return ['freezer', 'magin-boo', 'cell']
 /* return{
    nombre: "capitulo-donde muere krillin",
    numero: 89
  }*/
 return function(){
  return "Regresa Bills"
 }
}
console.log(retornoCapitulo()())

// ES6
//Arrow function
/*const prepararGokuBatalla = function(){
  console.log("Goku esta listo para pelear")
}

prepararGokuBatalla()*/
const prepararGokuBatallaFreezer = () => {
  console.log("Goku esta listo para pelear")
}

function registrarPoder2(nivel){
  console.log("Nivel aumentado")
}

const registrarPoder3 = (nivel) => console.log("Nivel aumentado")


// Objetos
const datosBananeritoGood  = {
  nombre:"Bananerito",
  age:1,
  address: {
    city:"Machala",
    telephone:12345
  },
  friends:['Cocodrigo','Torero'],
  status:true
}

console.log(datosBananeritoGood.friends.forEach(friend=>console.log(friend)))

//Desestructuracion
//let nombre = datosBananeritoGood.nombre
//let age = datosBananeritoGood.age

const {name, age, address, friends, status:estaActivo} = datosBananeritoGood
console.log(estaActivo)

const datosBugsBunny  = {
  nameb:"BugsBunny",
  ageb:1,
  addressb: {
    city:"Orlando",
    telephone:12345
  },
  friends:['Coyote','PatoLucas', 'Michael-Jordan'],
  status:false,
  girlfriend: "LolaBunny"
}

datosBugsBunny.photo = "busbunny.png"
delete datosBugsBunny.girlfriend
console.log(datosBugsBunny)

Object.keys(datosBugsBunny).includes("") ? console.log("Falta clave") : console.log("Estan todas las claves")


const datosNaruto = {
  name: "Naruto",
  age: 17,
  address: {
    village: "Konooha",
    telephone: 12345
  }
};

const datosNaruBynny = {...datosBugsBunny, ...datosNaruto};
console.log(datosNaruBynny)

// --------------------------------------------------------------------------

const planContributions = [
  {
    name: "Basic",
    mount:5,
    benefits: ['camiseta, billar'],
    image: "photo/plan/basic.png"
  },

  {
    name: "Plus",
    mount:15,
    benefits: ['camiseta, billar', 'funda de caramelo', 'play'],
    image: "photo/plan/plus.png"
  }
]
//Iteracion de cada plan para mostrar la informacion que yo quiero
const newPlanContributionsFront = planContributions.map((pc) => {
  return{
    name:pc.name,
    mount:pc.mount
  }
})

console.log(newPlanContributionsFront)

// ES6

const dishes = ["Arroz Marinero", "Jugo de coco", "Empanadas", "Almuerzos"]
const [dish1, dish2, dish3, dish4] = dishes
console.log(dish1)

const stakeholders = ['Bielas', 'Montania', 'Pasantias', 'Tinder', 'Competencias']

stakeholders.length >= 5 ? console.log("Grupos completos") : console.log("Se puede agregar un grupo extra")
//agregar al ultimo
stakeholders.push('FrienZone')
//agregar al inicio
stakeholders.unshift('PoliMemes')
//eliminar ultimo
stakeholders.pop()
//eliminar primero
stakeholders.shift()

let result = stakeholders.find((stakeholder)=>(stakeholder==="Tinder"))
result ? console.log("El grupo ya existe") : console.log("El grupo no existe")

let filterStakeholders = stakeholders.filter((stakeholder)=>(stakeholder.startsWith('M')))
console.log(filterStakeholders)

stakeholders.includes("Moda") ? console.log("Listar los estudiantes") : console.log("No se encontraron resultados para ese grupo")

// ----------------------------------------------------------------
// Operador rest y spread
//SPREAD
const usersBasic = ['jose', 'pedro', 'rose']
const usersPremium = ['robert', 'matius', 'eduardo']
const allUsers = [...usersBasic, ...usersPremium]
console.log(allUsers)

const assistancesToday = ['Mateo', 'Dilan', 'Scarlet', 'Max', 'Janeth']

const [userOne, userTwo, ...usersRest] = assistancesToday

console.log(assistancesToday)