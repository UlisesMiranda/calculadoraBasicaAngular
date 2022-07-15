import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Aplicación de Calculadora';
  operandoA = 0
  operandoB = 0
  resultado?:number

  sumar() {
    this.resultado = this.operandoA + this.operandoB;
  }
}
