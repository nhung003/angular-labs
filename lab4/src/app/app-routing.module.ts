import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ProductDsComponent } from './product-ds/product-ds.component';
import { ProductThemComponent } from './product-them/product-them.component';
import { ProductSuaComponent } from './product-sua/product-sua.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'sanpham', component:ProductlistComponent},
  {path:'sanpham/:id', component:ProductdetailComponent},
  {path:'lienhe', component:LienheComponent},
  {path:'dangnhap', component:DangnhapComponent},
  {path:'admin/sp', component:ProductDsComponent},
  {path:'admin/themsp', component:ProductThemComponent},
  {path:'admin/suasp/:id', component:ProductSuaComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
