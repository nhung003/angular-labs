import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  {path: 'dangky', component: DangkyComponent},
  {path: 'dangnhap', component: DangnhapComponent},
  {path: 'join', component: JoinComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
