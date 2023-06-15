
import { Injectable } from '@angular/core';
import { DuAn } from './du-an';

@Injectable({
  providedIn: 'root'
})

export class DuanService {

  constructor() { }
  listDuAn:DuAn[] = [
    {id:1, tenDuAn:'Quản lý trại heo', ngayStart: '2022-03-01', tien:67000000, leader:1, thanhvien:[1,3,4]},
    {id:2, tenDuAn:'Cây xanh công viên', ngayStart: '2022-04-02', tien:98500000, leader:1, thanhvien:[1,3,4]},
    {id:3, tenDuAn:'Website Văn hóa Việt', ngayStart: '2022-02-15', tien:35000000, leader:1, thanhvien:[2,4]},
    {id:4, tenDuAn:'Website du lịch bụi', ngayStart: '2022-03-21', tien:75500000, leader:1, thanhvien:[2,4]},
    {id:5, tenDuAn:'Quản lý nhà thuốc Vĩnh An', ngayStart: '2022-05-02', tien:97000000, leader:1, thanhvien:[3,4]},
    {id:6, tenDuAn:'Chăm sóc thú cưng', ngayStart: '2022-02-11', tien:18000000, leader:1, thanhvien:[3,4]}

  ];
  getDuAn(){
    return this.listDuAn;
  }
  getMotDuAn(id:number=0){
    return this.listDuAn.find(da => da.id==id);
  }

  themDuAn(da:DuAn=<DuAn>{}){
    this.listDuAn.push(da);
  }

  getLastId(): number {
    if (this.listDuAn.length > 0) {
      const lastDuAn = this.listDuAn[this.listDuAn.length - 1];
      return lastDuAn.id;
    }
    return 0; // Trả về 0 nếu không có dự án nào trong danh sách
  }
  capnhatDuAn(da:DuAn=<DuAn>{}){
    let index = this.listDuAn.findIndex(p => p.id == da.id);
    this.listDuAn[index] = da;

  }
  xoaDuAn(id:number=0){
    let index = this.listDuAn.findIndex(da => da.id === id);
    this.listDuAn.splice(index,1);
  }
}
