import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../../du-lieu.service';

@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent {

  constructor(
    private router: Router,
    private d:DuLieuService
  ) {}

  ho:string='';
  ten:string='';
  date:string='';

  themNV(nv:any){
    var ho= nv.ho;
    var ten= nv.ten;
    var ngaysinh = nv.ngaysinh;
    var phai = nv.phai;
    var khuvuc = nv.khuvuc;

    console.log(ten, ho, ngaysinh);
    this.d.themNhanVien(nv).subscribe ( data => alert('Thêm thành công'));
    this.router.navigate(['/leader/nv']);

  }
  // listNhanVien:any;

  ngOnInit(): void {
    // this.d.getNhanVien().subscribe(data => this.listNhanVien = data);
   
  }

  
}
