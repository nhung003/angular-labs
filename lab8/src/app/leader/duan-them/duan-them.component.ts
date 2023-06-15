import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../../du-lieu.service';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent {
  
  constructor(
    private router: Router,
    private d:DuLieuService
  ) {}
  


  tenDuAn: string = '';
  tien: string = '';
  ngayStart: string = '';

  
  themDA(da:any){
    var tenDuAn= da.tenDuAn;
    var ngayStart= da.ngayStart;
    var tien = da.tien;
    console.log(tenDuAn, ngayStart, tien);
    this.d.themDuAn(da).subscribe ( data => alert('Thêm thành công'));
    this.router.navigate(['/leader/duan']);

  }
  listNhanVien:any;

  ngOnInit(): void {
    this.d.getNhanVien().subscribe(data => this.listNhanVien = data);
   
  }

  xuly(d: any) {
    console.log("Data: ", d);
    console.log("tenDuAn=", this.tenDuAn);
  }
  
}





