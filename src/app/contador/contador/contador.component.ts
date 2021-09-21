import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <button (click)="acumular(-base)">-{{base}}</button>
        <h2>{{numero}}</h2>
        <button (click)="acumular(base)">+{{base}}</button>

    `
})

export class ContadorComponent {
    title: string = 'Hola Mundo';
    numero: number = 0;
  
    base:number=5;
  
  
    acumular(base:number){
      this.numero+=base;
    }
  
}