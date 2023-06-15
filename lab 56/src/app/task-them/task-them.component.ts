import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { DuAn } from '../du-an';
import { DuanService } from '../duan.service';
import { NhanVien } from '../nhan-vien';
import { NvService } from '../nv.service';


@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent {
  constructor(
    private taskService: TaskService,
    private daService: DuanService,
    private nvService: NvService,


    private router:Router,
  ){}
  listDa:DuAn[] =[];
  listNv:NhanVien[] =[];



  task: Task = {} as Task;
  ten:string='';
  mota:string='';
  themTask(){
    const previousId = this.taskService.getLastId();
    const newId = previousId + 1;
    this.task.id = newId;
    this.task.duAnID = Number(this.task.duAnID);
    this.task.nhanvienID = Number(this.task.nhanvienID);
    console.log(this.task);
    this.taskService.themTask(this.task);
    this.router.navigate(['/task']);
  }
  ngOnInit(): void {
    this.listDa=this.daService.getDuAn();
    this.listNv=this.nvService.getNhanVien();
  }
}
