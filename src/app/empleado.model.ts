export class Empleado {
  constructor(nombre: string, apellido: string, edad: number, cargo: string, contratado: boolean) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;
    this.contratado = contratado;

    }
    nombre: string;
    apellido: string;
    edad: number;
    cargo: string;
    contratado: boolean;

  }
