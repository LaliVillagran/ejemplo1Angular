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
  compradores:number;

  valorCompraPorcentaje:number;
  descuentoAdicional:number;
  precioxBoleto:number;
  valorCompra:number;
  valorCompraFinal:number = 0;
  precioBoleto:number=12.00;
  simbolo:string = '$';
  limiteBoleto:string;
  loSentimos:string;

  constructor() { }

  ngOnInit(): void {
  }



  ValorCompra():void{
    
     switch (this.targetaCine) {
      case true:
        this.descuentoAdicional = this.precioBoleto * .10;
        if(this.boleto>5, this.boleto<8)
      {
        this.precioxBoleto = (this.compradores * this.boleto ) * this.precioBoleto

        this.valorCompraPorcentaje = this.precioxBoleto * .15;

        this.valorCompraFinal = this.precioxBoleto - this.valorCompraPorcentaje - this.descuentoAdicional;
        this.loSentimos = '';
      } 

      if(this.boleto==3, this.boleto==4, this.boleto==5)
      {
        this.precioxBoleto = (this.compradores * this.boleto ) * this.precioBoleto

        this.valorCompraPorcentaje = this.precioxBoleto * .10;

        this.valorCompraFinal = this.precioxBoleto - this.valorCompraPorcentaje;
      } 

      if(this.boleto==2)
      {
        this.valorCompraFinal = (this.compradores * this.boleto ) * this.precioBoleto

        
      } 
      if(this.boleto==1){
        this.valorCompraFinal = (this.compradores * this.boleto ) * this.precioBoleto
      } 

      if(this.boleto>=8)
      {
          this.loSentimos = 'Lo sentimos, excedio la cantidad de boletos por persona';
          this.valorCompraFinal = 0.0;
      } 
        break;

      
     
      default:
        if(this.boleto>5, this.boleto<8)
      {
        this.precioxBoleto = (this.compradores * this.boleto ) * this.precioBoleto

        this.valorCompraPorcentaje = this.precioxBoleto * .15;

        this.valorCompraFinal = this.precioxBoleto - this.valorCompraPorcentaje;
        this.loSentimos = '';
      } 
      
      if(this.boleto==3, this.boleto==4, this.boleto==5)
      {
        this.precioxBoleto = (this.compradores * this.boleto ) * this.precioBoleto

        this.valorCompraPorcentaje = this.precioxBoleto * .10;

        this.valorCompraFinal = this.precioxBoleto - this.valorCompraPorcentaje;
      } 

      if(this.boleto==2)
      {
        this.valorCompraFinal = (this.compradores * this.boleto ) * this.precioBoleto

        
      } 
      if(this.boleto==1){
        this.valorCompraFinal = (this.compradores * this.boleto ) * this.precioBoleto
        this.loSentimos = '';
      }

      if(this.boleto>=8)
      {
        this.loSentimos = 'Lo sentimos, excedio la cantidad de boletos por persona';
        this.valorCompraFinal = 0;
      } 
        break;
        
     }   
  }

}
