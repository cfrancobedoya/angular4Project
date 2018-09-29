import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medellinsquare';
  lugares: any = [
    {nombre: 'Florería la gardenia'},
    {nombre: 'Donas la pasaditas'},
    {nombre: 'Veterinaria Huellitas Felices'}
  ];
  constructor() {
  }

  hacerAlgo() {
    alert('Haciendo algo!');
  }
}

