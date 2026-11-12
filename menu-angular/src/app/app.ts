
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  integrantes = [
    {
      numero: '01',
      nombre: 'Dulce Vázquez',
      imagen: 'img/Dulce.jpeg',
      carpeta: 'Dulce_Vazquez',
      color: 'card-rose'
    },
    {
      numero: '02',
      nombre: 'Paola Pérez',
      imagen: 'img/Paola.jpg',
      carpeta: 'Paola-Perez',
      color: 'card-lavender'
    },
    {
      numero: '03',
      nombre: 'Naylea Aguilar',
      imagen: 'img/Naylea.jpeg',
      carpeta: 'Naylea_Aguilar',
      color: 'card-blush'
    },
    {
      numero: '04',
      nombre: 'Gustavo Jaramillo',
      imagen: 'img/Gustavo.jpeg',
      carpeta: 'Gustavo-Jaramillo',
      color: 'card-periwinkle'
    },
    {
      numero: '05',
      nombre: 'Karol Vázquez',
      imagen: 'img/Karol.jpeg',
      carpeta: 'Karol-Vazquez',
      color: 'card-grape'
    }
  ];

}
