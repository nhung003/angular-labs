import { Component, OnInit } from '@angular/core';
import { ISanpham } from '../isanpham';
import { SanPhamService } from '../san-pham.service';

@Component({
  selector: 'app-product-ds',
  templateUrl: './product-ds.component.html',
  styleUrls: ['./product-ds.component.css']
})
export class ProductDsComponent implements OnInit {
  constructor(
    private spService: SanPhamService
  ){}
  listSP:ISanpham[] =[];
  ngOnInit(): void{
    this.listSP = this.spService.getSanPham();
  };

  // xoaSP(id:number=0){
  //  this.spService.xoaSanPham(id);
  //  return confirm('Bạn có chắc là muốn xóa sản phẩm này không?');
  // }
  xoaSP(id: number) {
    const index = this.listSP.findIndex(sp => sp.id === id);
    if (index !== -1) {
      const confirmation = confirm('Bạn có chắc là muốn xóa sản phẩm này không?');
      if (confirmation) {
        this.listSP.splice(index, 1);
      }
    }
  }
}
