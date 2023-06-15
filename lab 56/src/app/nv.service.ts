import { Injectable } from '@angular/core';
import { NhanVien } from './nhan-vien';

@Injectable({
  providedIn: 'root'
})
export class NvService {

  constructor() { }
  listNhanVien:NhanVien[] = [
    {id:1, ho:'Nguyễn Bá', ten:'Đạo', ngaysinh:'2001-1-3', phai:true,khuvuc:'Bắc'},
    {id:2, ho:'Phạm Kỷ', ten:'Luật', ngaysinh:'2001-5-6', phai:true,khuvuc:'Nam'},
    {id:3, ho:'Mai Thanh', ten:'Toán', ngaysinh:'2002-6-15', phai:true,khuvuc:'Nam'},
    {id:4, ho:'Cao Thị Chót', ten:'Vót', ngaysinh:'2002-8-19', phai:false,khuvuc:'Nam'},
    {id:5, ho:'Mai Phạt Sáu', ten:'Ngàn', ngaysinh:'2001-2-28', phai:false,khuvuc:'Trung'},
  ]

  getNhanVien(){
    return this.listNhanVien;
  }
  getMotNhanVien(id:number=0){
    return this.listNhanVien.find(nv => nv.id==id);
  }

  themNhanVien(nv:NhanVien=<NhanVien>{}){
    this.listNhanVien.push(nv);
  }

  getLastId(): number {
    if (this.listNhanVien.length > 0) {
      const lastNhanVien = this.listNhanVien[this.listNhanVien.length - 1];
      return lastNhanVien.id;
    }
    return 0; // Trả về 0 nếu không có dự án nào trong danh sách
  }
  capnhatNhanVien(nv:NhanVien=<NhanVien>{}){
    let index = this.listNhanVien.findIndex(p => p.id == nv.id);
    this.listNhanVien[index] = nv;

  }
  xoaNhanVien(id:number=0){
    let index = this.listNhanVien.findIndex(nv => nv.id === id);
    this.listNhanVien.splice(index,1);
  }
}
