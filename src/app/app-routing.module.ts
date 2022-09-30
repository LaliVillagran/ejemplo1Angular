import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcuComponent } from './calculos/calcu/calcu.component';
import { SumaComponent } from './calculos/suma/suma.component';
import { RestaComponent } from './calculos/resta/resta.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'', component:CalcuComponent},
  {path:'suma', component:SumaComponent},
  {path:'resta', component:RestaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
