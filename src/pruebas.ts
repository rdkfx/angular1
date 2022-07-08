
let nom = 'hola mundo';
let num: number = 9;
console.log(typeof(nom));
let array1: string []=["cero"];

array1[0]="pueblo";
//array1[1]=5;

interface personaje{

    nombre: string;
    edad: number;
    habilidades: string[];
};

const personaje={
    nombre: "ash",
    edad: 15,
    habilidades:["capturar","correr"]
}

personaje.edad=20;
personaje.nombre="mew";


console.table(personaje);