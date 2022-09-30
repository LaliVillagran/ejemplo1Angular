import { Component, OnInit } from '@angular/core';
import { Operacion } from './Operacion';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  public numero:number;
  public resultado1:number;
  public resultado2:number;
  public resultado3:number;
  public resultado4:number;
  public resultado5:number;
  public resultado6:number;
  public resultado7:number;
  public resultado8:number;
  public resultado9:number;
  public resultado10:number;

  contructor(){
  }
  ngOnInit(): void {
  }
  calcular():void{

    
       this.resultado1 = this.numero * 1;
       this.resultado2 = this.numero * 2;
       this.resultado3 = this.numero * 3;
       this.resultado4 = this.numero * 4;
       this.resultado5 = this.numero * 5;
       this.resultado6 = this.numero * 6;
       this.resultado7 = this.numero * 7;
       this.resultado8 = this.numero * 8;
       this.resultado9 = this.numero * 9;
       this.resultado10 = this.numero * 10;

  }
  operacion:Operacion[]=[

  ]
}
