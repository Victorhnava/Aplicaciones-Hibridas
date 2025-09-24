// index.js

const Alumno = require('./Alumno');

// Crear instancia de Alumno
const alumno1 = new Alumno("Juan", "Pérez", 20, "Ingeniería en Sistemas");

// Probar métodos
console.log("Datos del Alumno:", alumno1.obtenerDatos());
console.log("Carrera:", alumno1.obtenerCarrera());
console.log("Edad:", alumno1.retornarEdad());

// Modificar edad
alumno1.modificarEdad(21);
console.log("Edad actualizada:", alumno1.retornarEdad());

// Agregar materias
alumno1.agregarMateria("Matemáticas");
alumno1.agregarMateria("Programación");
alumno1.agregarMateria("Base de Datos");

// Mostrar materias
console.log("Materias:");
alumno1.mostrarMaterias();
