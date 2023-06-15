import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../../du-lieu.service';
@Component({
  selector: 'app-duan-detail',
  templateUrl: './duan-detail.component.html',
  styleUrls: ['./duan-detail.component.css']
})
export class DuanDetailComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private d:DuLieuService

  ){}
  da:any;
  idDA:number = Number(this.route.snapshot.params['id']);

  ngOnInit(): void {
    this.idDA = Number(this.route.snapshot.params['id']);
    this.d.getMotDuAn(this.idDA).subscribe(data => {
      this.da = data;
    });
  }



}
