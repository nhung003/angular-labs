import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ISanpham } from '../isanpham';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})


export class ProductdetailComponent {
  @Input() sp:ISanpham={
     id:0,tensp:'',
        code:'', 
        giasp:0,
        mota:'',
     urlImage:'', 
        ngay:'', 
        starRate:0
     };
}
