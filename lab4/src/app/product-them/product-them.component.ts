import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ISanpham } from '../isanpham';
import { SanPhamService } from '../san-pham.service';

@Component({
  selector: 'app-product-them',
  templateUrl: './product-them.component.html',
  styleUrls: ['./product-them.component.css']
})
export class ProductThemComponent implements OnInit {
  constructor(
    private spService: SanPhamService,
    private router: Router,
  ){}
    sp:ISanpham = <ISanpham>{}; 
    themSP(){
      this.spService.themSanPham(this.sp);
      this.router.navigate(['/admin/sp']);
    }
    ngOnInit(): void {
      
    }
}
