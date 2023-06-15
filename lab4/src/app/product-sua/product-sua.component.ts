import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SanPhamService } from '../san-pham.service';
import { ISanpham } from '../isanpham';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-sua',
  templateUrl: './product-sua.component.html',
  styleUrls: ['./product-sua.component.css']
})
export class ProductSuaComponent {
  constructor(
    private spService: SanPhamService,
    private router: Router,
    private activeRoute : ActivatedRoute,
  ){}
  idSP:number = Number(this.activeRoute.snapshot.params['id']);
  sp:ISanpham = <ISanpham> {};
  ngOnInit(): void {
    let kq = this.spService.getMotSanPham(this.idSP);
    this.sp = kq as ISanpham;


  };
  capnhatSP(){
    this.spService.capnhatSanPham(this.sp);
    this.router.navigate(['/admin/sp']);
  }
}
