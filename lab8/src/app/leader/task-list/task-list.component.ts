import { Component } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';
// json-server --w db.json

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(
    private d:DuLieuService
    ){}
  listTask:any;
  listNv:any;
  listDa:any;

  ngOnInit(): void {
    this.listTask = this.d.getTask().subscribe ( 
      data => this.listTask= data
      // console.log(data1);
    );
    this.listNv = this.d.getNhanVien().subscribe ( 
      data => this.listNv= data

    );
    this.listDa = this.d.getDuAn().subscribe ( 
      data => this.listDa= data

    );
  
  }

  xoaTask(id: number = 0) {
    if (confirm('Bạn có chắc muốn xóa task này không?')) {
      this.d.xoaTask(id).subscribe(() => {
        this.listTask = this.listTask.filter((task: any) => task.id !== id);
      });
    }
    return false;
  }
  
}
