import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imagewidth:number=50;
  imageMarge:number=2;
  muestraImg:boolean=false;

  muestraImagen():void{
    if (this.muestraImg){
      this.muestraImg=false;
     
  }else{
    this.muestraImg=true;
  }
  }
  constructor() { }

  products:Producto[]=[
    {
    "product1":1,
    "productName":'Sentra',
    "description": 'auto familiar 4 puertas',
    'listFilter':"",
    "createDate":"Mayo 21, 2011",
    "precio":430000,
    "rating":4.8,
    "imageUrl":"https://www.google.com/search?q=centra&rlz=1C1UUXU_esMX1022MX1022&sxsrf=ALiCzsbD-EZ_mEUuK0jO_Q_jZwvFtFcU9w:1663971906784&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiV262z-qv6AhVTC0QIHQy_BMwQ_AUoAnoECAMQBA#imgrc=9ZegAc89_OFnSM"
    }
  ]

  listFilter(){
  }


  ngOnInit(): void {
  }

}
