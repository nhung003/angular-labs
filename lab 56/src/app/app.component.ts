import { Component } from '@angular/core';
import { DuAn } from './du-an';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asm1';
  chucNang:string = '';
  ganCN(cn:string=''){
    this.chucNang = cn;
    if(this.chucNang!='ct') this.daDangXem=null;
  }
  daDangXem:any = null;
  ganDA(da:DuAn){
    this.daDangXem=da;
    this.chucNang='ct';
  }
}
