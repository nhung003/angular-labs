import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../../du-lieu.service';


@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent {
  constructor(
    private router: Router,
    private d:DuLieuService
  ){}
 
  ten:string='';
  mota:string='';
  task:any;
    
  listDa: any;
  listNv: any;
  themTask(task: any) {
    const ten = this.ten;
    const mota = this.mota;
    console.log(mota, ten);
  //   this.listDa = Number(this.listDa);
  //   this.listNv = Number(this.listNv);
  //   const selectedNhanVien = this.listNv.find((item: any) => item.id === task.nhanvienID);
  //   const selectedDuAn = this.listDa.find((item: any) => item.id === task.duAnID);
  // console.log(task.nhanvienID,task.duAnID)
  //   if (selectedNhanVien && selectedDuAn) {
  //     task.nhanVien = selectedNhanVien;
  //     task.duAn = selectedDuAn;
  
      console.log("Task:", task);
  
      this.d.themTask(task).subscribe(data => {
        console.log("Dữ liệu đã được thêm:", data);
        alert('Thêm thành công');
      });
  
      this.router.navigate(['/leader/task']);
    // } else {
    //   console.log("Nhân viên hoặc dự án không hợp lệ");
    // }
  }
  
  


  ngOnInit(): void {
    this.d.getDuAn().subscribe(data => {
      this.listDa = data;
      console.log('Dữ liệu dự án:', this.listDa);
    });
  
    this.d.getNhanVien().subscribe(data => {
      this.listNv = data;
      console.log('Dữ liệu nhân viên:', this.listNv);
    });
  }
  xuly(d: any) {
    console.log("Data: ", d);
    console.log("tenDuAn=", this.ten);
  }
}
