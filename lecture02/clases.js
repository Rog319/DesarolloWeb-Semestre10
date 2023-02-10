// class Persona {
//   constructor(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//   }

//   quienSoy() {
//     console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
//   }
// }

// const merik = new Persona('Merik', 'Sanchez');
// merik.quienSoy();

// class Animal {
//   constructor(nombre) {
//     this.velocidad = 0;
//     this.nombre = nombre;
//   }
//   empezoAmoverse(velocidad) {
//     this.velocidad = velocidad;
//     return `${this.nombre} ha comenzado a moverse a una velocidad de ${this.velocidad}`;
//   }
//   seDetuvo() {
//     this.velocidad = 0;
//     return `${this.nombre} se ha detenido y esta comiendo`;
//   }
// }

// let animal = new Animal('Animal');
// console.log(animal.empezoAmoverse(20));

// class Perro extends Animal {
//   ladrar() {
//     return `${this.nombre} esta ladrando`;
//   }
// }

// const chokys = new Perro('Chokys');
// console.log(chokys.ladrar());
// console.log(chokys.empezoAmoverse(10));
// console.log(chokys.seDetuvo());

// class Persona {
//   constructor(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//   }
//   get nombreCompleto() {
//     return `${this.nombre} ${this.apellido}`;
//   }
//   set nombreCompleto(nombre) {
//     const partes = nombre.split(' ');
//     this.nombre = partes[0];
//     this.apellido = partes[1];
//   }
// }

// const merik = new Persona('Merik', 'X');
// const nombrePersona = merik.nombreCompleto;
// console.log(nombrePersona);

// const gio = new Persona();
// gio.nombreCompleto = 'Gio; Hernandez';
// console.log(gio.nombre);

// const objetoDePrueba = {
//   nombre: 'Merik',
//   get nombreDeUsuario() {
//     return this.nombre;
//   },
//   set nombreDeUsuario(nuevoNombre) {
//     this.nombre = nuevoNombre;
//   },
// };

// console.log(objetoDePrueba.nombreDeUsuario);
// objetoDePrueba.nombreDeUsuario = 'Ursula';
// console.log(objetoDePrueba.nombreDeUsuario);

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   static staticPropety = 'Algo...';
//   static staticMethod() {
//     return this.name;
//   }
// }

// const robert = new User('Robert');
// console.log(User.staticPropety);
// console.log(User.staticMethod());

//------ Sobrecarga de metodos --------

// class Animal {
//   constructor(nombre) {
//     this.velocidad = 0;
//     this.nombre = nombre;
//   }
//   empezoAmoverse(velocidad) {
//     this.velocidad = velocidad;
//     return `${this.nombre} ha comenzado a moverse a una velocidad de ${this.velocidad}`;
//   }
//   seDetuvo() {
//     this.velocidad = 0;
//     console.log(`${this.nombre} se ha detenido y esta comiendo`);
//   }
// }

// class Perro extends Animal {
//   ladrar() {
//     return `${this.name} esta ladrando`;
//   }
//   seDetuvo() {
//     super.seDetuvo();
//     console.log(' y tambien esta tomando agua');
//   }
// }

// const perro = new Perro('Chokys');
// perro.seDetuvo();

// --------Strict Mode--------

// 'use strict';
// mensaje = 'Este es un mensaje de prueba';
// console.log(mensaje);

// ('use strict');
// a = 10;

// let sumarDos = function () {
//   const b = 15;
//   return a + b;
// };

// let resultado = sumarDos();
// console.log(resultado);

// -------Funciones---------

'use strict';

function nuevoMensaje() {
  console.log(this === undefined);
}

const nuevoMensaje2 = () => {
  console.log(this === undefined);
};
nuevoMensaje();
