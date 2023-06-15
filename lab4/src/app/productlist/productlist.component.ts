import { Component, OnInit } from '@angular/core';
import { ISanpham } from '../isanpham';
import { SanPhamService } from '../san-pham.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent  implements OnInit{
  constructor(private spService:SanPhamService){}
  listSP:ISanpham[] = [];
  ngOnInit(): void {
    this.listSP=this.spService.getSanPham();
  }
}
