import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes:string[]=['spiderman','iron man','thor','capitan America','Hulk'];
  heroeBorrado:string='';
  indice: number=0;

  borrarHeroe(){
    this.heroeBorrado=this.heroes.shift() || '';
    return this.heroeBorrado;

  }

  reiniciar(){
    window.location.reload();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
