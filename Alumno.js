// Alumno.js

class Alumno {
    constructor(nombre, apellido, edad, carrera) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = [];
    }

    obtenerCarrera() {
        return this.carrera;
    }

    obtenerDatos() {
        return `${this.nombre} ${this.apellido}`;
    }

    modificarEdad(nuevaEdad) {
        if (typeof nuevaEdad === "number" && nuevaEdad > 0) {
            this.edad = nuevaEdad;
        } else {
            console.error("La edad debe ser un número positivo.");
        }
    }

    agregarMateria(materia) {
        if (typeof materia === "string" && materia.trim() !== "") {
            this.materias.push(materia);
        } else {
            console.error("La materia debe ser un texto válido.");
        }
    }

    mostrarMaterias() {
        console.table(this.materias);
    }

    retornarEdad() {
        return this.edad;
    }
}

module.exports = Alumno;
