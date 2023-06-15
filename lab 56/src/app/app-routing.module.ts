import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanDetailComponent } from './duan-detail/duan-detail.component';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskDatailComponent } from './task-datail/task-datail.component';

import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { NvDetailComponent } from './nv-detail/nv-detail.component';
const routes: Routes = [
  {path: 'duan', component: DuanListComponent},
  {path: 'duan/:id', component: DuanDetailComponent},
  {path: 'duanthem', component: DuanThemComponent},
  {path: 'suaduan/:id', component: DuanSuaComponent},

  {path: 'task', component: TaskListComponent},
  {path: 'task/:id', component: TaskDatailComponent},
  {path: 'taskthem', component: TaskThemComponent},
  {path: 'suatask/:id', component: TaskSuaComponent},

  {path: 'nv', component: NvListComponent},
  {path: 'nv/:id', component: NvDetailComponent},
  {path: 'nvthem', component: NvThemComponent},
  {path: 'suanv/:id', component: NvSuaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
