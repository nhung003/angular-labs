import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NhanVien } from '../nhan-vien';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit{
  constructor(
    private taskService:TaskService,
    private router:Router,
    private activeRoute:ActivatedRoute,
  ){}

  
  idTask:number = Number(this.activeRoute.snapshot.params['id']);
  task:Task = <Task>{};// thong tin dang chinh
  ngOnInit(): void{
    let kq = this.taskService.getMotTask(this.idTask);
    this.task = kq as Task;
  }

  capnhatTask(){
    this.taskService.capnhatTask(this.task);
    this.router.navigate(['/task']);
  }
}
