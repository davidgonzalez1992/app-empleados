import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de empleados';

  empleados: Empleado[] = [
    new Empleado('Juan', 'Perez', 20, 'Programador', true),
    new Empleado('Maria', 'Gomez', 30, 'Analista', false),
    new Empleado('Pedro', 'Garcia', 40, 'Tester', true),
    new Empleado('Luis', 'Gonzalez', 50, 'Arquitecto', false)
  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroEdad, this.cuadroCargo, this.cuadroContratado);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroEdad: number = 0;
  cuadroCargo: string = '';
  cuadroContratado: boolean = false;

}
