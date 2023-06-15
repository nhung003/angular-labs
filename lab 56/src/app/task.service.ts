import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  listTask:Task[] = [
      {id:1, tenTask:'Phân tích yêu cầu', duAnID:1, nhanvienID:1,moTa:"Phân tích các yêu cầu của khách hàng để team thực hiện",status:0,priority:1 },
      {id:2, tenTask:'Thực hiện layout cho ứng dụng', duAnID:1, nhanvienID:2,moTa:"Thực hiện layout website, chú ý kỹ responsive",status:0,priority:1 },
      {id:3, tenTask:'Tìm hiểu yêu cầu của khách hàng', duAnID:2, nhanvienID:3,moTa:"Đến công ty và ghi nhận các yêu cầu của khách hàng",status:0,priority:2 },
      {id:4, tenTask:'Đăng ký thành viên', duAnID:3, nhanvienID:4,moTa:"Thực hiện chức năng đăng ký, có capcha, mail kích hoạt",status:0,priority:1 },
      {id:5, tenTask:'Đổi pass, quên pass', duAnID:1, nhanvienID:4,moTa:"Thực hiện chức năng đỗi pass, quên pass. Nhớ kiểm tra user login, email tồn tại, pass cũ hợp lệ ",status:0,priority:1 },
      {id:6, tenTask:'Testing 1', duAnID:4, nhanvienID:3,moTa:"Kiểm tra mọi form chức năng theo các case đã liệt kê",status:0,priority:2 },
      {id:7, tenTask:'Triển khai website', duAnID:5, nhanvienID:4,moTa:"Triển khai website lên hosting đã mua",status:0,priority:2 },
      {id:8, tenTask:'Hướng dẫn sử dụng và bàn giao', duAnID:5, nhanvienID:1,moTa:"Hướng dẫn sử dụng cho khách hàng",status:0,priority:2 },
      {id:9, tenTask:'Testing 2', duAnID:4, nhanvienID:2,moTa:"Kiểm tra các tính năng bảo mật theo các yêu cầu đã nêu trong tài liệu dự án",status:0,priority:2 },
     ]
  getTask(){
    return this.listTask;
  }
  getMotTask(id:number=0){
    return this.listTask.find(t => t.id==id);
  }

  themTask(t:Task=<Task>{}){
    this.listTask.push(t);
  }

  getLastId(): number {
    if (this.listTask.length > 0) {
      const lastDuAn = this.listTask[this.listTask.length - 1];
      return lastDuAn.id;
    }
    return 0; // Trả về 0 nếu không có dự án nào trong danh sách
  }
  capnhatTask(t:Task=<Task>{}){
    let index = this.listTask.findIndex(p => p.id == t.id);
    this.listTask[index] = t;

  }
  // xoaTask(id:number=0){
  //   let index = this.listTask.findIndex(t => t.id === id);
  //   this.listTask.splice(index);
  // }
  xoaTask(index: number): void {
    if (index >= 0 && index < this.listTask.length) {
      this.listTask.splice(index, 1);
    }
  }
  
}
