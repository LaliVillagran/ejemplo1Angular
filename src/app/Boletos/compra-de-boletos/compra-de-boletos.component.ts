import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-de-boletos',
  templateUrl: './compra-de-boletos.component.html',
  styleUrls: ['./compra-de-boletos.component.css']
})
export class CompraDeBoletosComponent implements OnInit {

  targetaCine:boolean=false;
  boleto:number;
  usuarioNombre;

  valorCompraPorcentaje:number;
  descuentoAdicional:number;
  precioxBoleto:number;
  valorCompra:number;
  valorCompraFinal:number;
  precioBoleto:number=12.00;
  simbolo:string = '$';
  limiteBoleto:string;

  constructor() { }

  ngOnInit(): void {
  }



  ValorCompra():void{
    
     switch (this.targetaCine) {
      case true:
        this.descuentoAdicional = this.precioBoleto * .10;
        if(this.boleto>5, this.boleto<8)
      {
        this.precioxBoleto = this.boleto * this.precioBoleto

        this.valorCompraPorcentaje = this.precioxBoleto * .15;

        this.valorCompraFinal = this.precioxBoleto - this.valorCompraPorcentaje - this.descuentoAdicional;
      } 

      if(this.boleto==3, this.boleto==4, this.boleto==5)
      {
        this.precioxBoleto = this.boleto * this.precioBoleto

        this.valorCompraPorcentaje = this.precioxBoleto * .10;

        this.valorCompraFinal = this.precioxBoleto - this.valorCompraPorcentaje;
      } 

      if(this.boleto==1, this.boleto==2)
      {
        this.precioxBoleto = this.boleto * this.precioBoleto

        this.valorCompraFinal = this.precioxBoleto;
      } 

      if(this.boleto>7)
      {
       
        console.log('Lo siento, pasaste el limite de boletos por persona, intentalo de nuevo');
      } 
        break;

      
     
      default:
        if(this.boleto>5, this.boleto<8)
      {
        this.precioxBoleto = this.boleto * this.precioBoleto

        this.valorCompraPorcentaje = this.precioxBoleto * .15;

        this.valorCompraFinal = this.precioxBoleto - this.valorCompraPorcentaje;
      } 
      
      if(this.boleto==3, this.boleto==4, this.boleto==5)
      {
        this.precioxBoleto = this.boleto * this.precioBoleto

        this.valorCompraPorcentaje = this.precioxBoleto * .10;

        this.valorCompraFinal = this.precioxBoleto - this.valorCompraPorcentaje;
      } 

      if(this.boleto==1, this.boleto==2)
      {
        this.precioxBoleto = this.boleto * this.precioBoleto

        this.valorCompraFinal = this.precioxBoleto;
      } 

      if(this.boleto>7)
      {
        console.log('Lo siento, pasaste el limite de boletos por persona, intentalo de nuevo');
      } 
        break;
        
     } 
        
    
  }

}
