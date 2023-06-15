import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../../du-lieu.service';

@Component({
  selector: 'app-task-datail',
  templateUrl: './task-datail.component.html',
  styleUrls: ['./task-datail.component.css']
})
export class TaskDatailComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private d:DuLieuService
  ){}
  listNv:any;
  listDa:any;
  task:any;
  idTask:number = Number(this.route.snapshot.params['id']);
  ngOnInit(): void {
    this.d.getDuAn().subscribe(data => this.listDa = data);
    this.d.getNhanVien().subscribe(data => this.listNv = data);
    this.idTask = Number(this.route.snapshot.params['id']);
    this.d.getMotTask(this.idTask).subscribe(data => {
      this.task = data;
    });
  }
}
