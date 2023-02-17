const alex = {
  nombre: 'Alex',
  edad: '35',
  ingresos: [1000, 500, 1200, 300],
};

const melanie = {
  nombre: 'Melanie',
  edad: '23',
  ingresos: [2000, 234, 355, 300],
};

const enrique = {
  nombre: 'Enrique',
  edad: '44',
  ingresos: [1200, 570, 890, 300],
};

const listaPersonas = [alex, melanie, enrique];

//For of para recorrer un array
//for (let ingreso of persona.ingresos) console.log(ingreso);

//For in para recorrer array, te regresa los indices
// for (let ingreso in persona.ingresos) console.log(ingreso);

//persona.ingresos.forEach((element) => console.log(element));

listaPersonas.forEach((element) => console.log(element.nombre));

let promEdad = listaPersonas.map((e) => {
  return e.edad;
});

let res;

for (let i of promEdad) {
  res + i;
  console.log(i);
}
console.log(res);
