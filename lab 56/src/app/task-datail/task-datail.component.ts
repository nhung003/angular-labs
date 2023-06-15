import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-datail',
  templateUrl: './task-datail.component.html',
  styleUrls: ['./task-datail.component.css']
})
export class TaskDatailComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private taskService:TaskService
  ){}

  idTask:number = Number(this.route.snapshot.params['id']);
  task = <Task>{}; //obj rong the interface
  ngOnInit(): void {
    if(this.idTask<0) return;
    let kq = this.taskService.getMotTask(this.idTask);
    if(kq==null) {this.task={} as Task;}
    else { this.task = kq as Task;}
  }
}
