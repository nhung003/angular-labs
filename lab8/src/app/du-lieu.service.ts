import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
// json-server --w db.json
export class DuLieuService {

  constructor(private h:HttpClient) { }
  getDuAn(){
    return this.h.get('http://localhost:3000/duan');
  }
  getMotDuAn(id:number){
    return this.h.get('http://localhost:3000/duan/' + id);

  }
  themDuAn(da:any){
    return this.h.post('http://localhost:3000/duan',da);
  }
  xoaDuAn(id:number){
    return this.h.delete('http://localhost:3000/duan/'+ id)
  }
  suaDuAn(da:any){
    return this.h.put('http://localhost:3000/duan/' + da.id ,da);
  }
  getNhanVien(){
    return this.h.get('http://localhost:3000/nhanvien');
  }
  getMotNhanVien(id:number){
    return this.h.get('http://localhost:3000/nhanvien/' + id);

  }
  themNhanVien(nv:any){
    return this.h.post('http://localhost:3000/nhanvien',nv);
  }
  xoaNhanVien(id:number){
    return this.h.delete('http://localhost:3000/nhanvien/'+ id)
  }
  suaNhanVien(nv:any){
    return this.h.put('http://localhost:3000/nhanvien/' + nv.id ,nv);
  }
  getTask(){
    return this.h.get('http://localhost:3000/tasks');
  }
  getMotTask(id:number){
    return this.h.get('http://localhost:3000/tasks/' + id);

  }
  themTask(task:any){
    return this.h.post('http://localhost:3000/tasks',task);
  }
  xoaTask(id:number){
    return this.h.delete('http://localhost:3000/tasks/'+ id)
  }
  suaTask(task:any){
    return this.h.put('http://localhost:3000/tasks/' + task.id ,task);
  }
}
