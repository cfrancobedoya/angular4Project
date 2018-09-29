import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medellinsquare';
  lugares: any = [
    {active: true, nombre: 'Florería la gardenia'},
    {active: true, nombre: 'Donas la pasaditas'},
    {active: true, nombre: 'Veterinaria Huellitas Felices'},
    {active: false, nombre: 'Sushi Suhiroll'},
    {active: true, nombre: 'Hotel la García'},
    {active: false, nombre: 'Zapatería el Clavo'}
  ];
  constructor() {
  }

  hacerAlgo() {
    alert('Haciendo algo!');
  }
}

