import { Component } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';

@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css']
})
export class NvListComponent {

  constructor(
    private d:DuLieuService
    ){}
  listNhanVien:any;
  ngOnInit(): void {
    this.listNhanVien = this.d.getNhanVien().subscribe ( 
      data => this.listNhanVien= data

    );
  }

  xoaNV(id: number = 0) {
    if (confirm('Bạn có chắc muốn xóa dự án này không?')) {
      this.d.xoaNhanVien(id).subscribe(() => {
        this.listNhanVien = this.listNhanVien.filter((nhanVien: any) => nhanVien.id !== id);
      });
    }
    return false;
  }
}
