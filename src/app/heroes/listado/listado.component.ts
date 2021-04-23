import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[]= ['BlackWidow', 'Capitan America', 'Spiderman','Hulk','Thor','Aquaman']
  heroeBorrado :string= '';

  borrarHeroe(){
  // let heroeBorrado =  this.heroes.shift();
  
  this.heroeBorrado = this.heroes.shift() || ' ';

  }

  }


  // borrarHeroe(item){
  //   console.log('Borrando....');
  //   let i = this.heroes.indexOf(item)
  //   if(i !== -1){
  //   this.heroes.splice(i,1)
  // }


  // }

