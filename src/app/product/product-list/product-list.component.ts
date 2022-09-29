import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imagewidth:number=100;
  imageMarge:number=3;
  muestraImg:boolean=false;
  listfilter:string='';

  muestraImagen():void{ 
      this.muestraImg=!this.muestraImg;
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
    "imageUrl":"https://www.nissan.com.mx/content/dam/Nissan/mexico/assets/sentra/my21/vap/nissan-2021-sentra_sense_tm-d.jpeg.ximg.l_12_m.smart.jpeg"
    },

    {
      "product1":2,
      "productName":'Tsuru tuneado',
      "description": 'auto familiar 2 paps',
      'listFilter':"",
      "createDate":"Septiembre 11, 2003",
      "precio":20000,
      "rating":2.0,
      "imageUrl":"https://tuningcar.mx/wp-content/uploads/2021/02/fotos-coches-tuneados-1-1024x768.jpg"
      }
  ]


  ngOnInit(): void {
  }

}
