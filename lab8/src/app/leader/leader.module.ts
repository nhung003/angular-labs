import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeaderRoutingModule } from './leader-routing.module';
import { LeaderComponent } from './leader.component';


@NgModule({
  declarations: [
    LeaderComponent
  ],
  imports: [
    CommonModule,
    LeaderRoutingModule,
    FormsModule

  ]
})
export class LeaderModule { }
