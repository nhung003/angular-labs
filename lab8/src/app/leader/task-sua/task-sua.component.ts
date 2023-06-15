import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../../du-lieu.service';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit{
  constructor(
    private router:Router,
    private activeRoute:ActivatedRoute,
    private d:DuLieuService
  ){}

  task:any;
  idTask:number = Number(this.activeRoute.snapshot.params['id']);
  listNhanVien:any;
  listDuAn:any;
  listTask:any;


  ngOnInit(): void{
    this.d.getTask().subscribe(data => this.listTask = data);
    this.d.getNhanVien().subscribe(data => this.listNhanVien = data);
    this.d.getDuAn().subscribe(data => this.listDuAn = data);
    this.idTask = Number(this.activeRoute.snapshot.params['id']);
    this.d.getMotTask(this.idTask).subscribe(data => {
      this.task = data;
    });
  }

  
  suaTask(task:any){
    this.d.suaTask(this.task).subscribe (data => {
      alert('Sửa dự án thành công');
      this.router.navigate(['/leader/task'], { replaceUrl: true });
    });
  }
}
