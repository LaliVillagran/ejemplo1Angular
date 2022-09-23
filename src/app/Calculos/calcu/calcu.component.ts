import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.css']
})
export class CalcuComponent  {

  total:number=0;
  numero1;
  numero2;
  Option;

  sum:number;
  res;
  multi;
  div;

  constructor() { }

  calcular(){
    if(this.Option=="sum"){
      this.total= parseInt(this.numero1) + parseInt(this.numero2);
    }

    if(this.Option=="res"){
      this.total= parseInt(this.numero1) - parseInt(this.numero2);
    }
    if(this.Option=="multi"){
      this.total= parseInt(this.numero1) * parseInt(this.numero2);
    }

    if(this.Option=="div"){
      this.total= parseInt(this.numero1) / parseInt(this.numero2);
    }

    if(this.Option!="suma" && this.Option!="res" && this.Option!="multi" && this.Option!=="div"){
      console.log('Lo siento, el caracter que ingresó no es valido para la operación.')
    }
  }
  

}
