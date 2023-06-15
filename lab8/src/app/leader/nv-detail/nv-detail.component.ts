import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../../du-lieu.service';

@Component({
  selector: 'app-nv-detail',
  templateUrl: './nv-detail.component.html',
  styleUrls: ['./nv-detail.component.css']
})
export class NvDetailComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private d:DuLieuService

  ){}

  nv:any;
  idNV:number = Number(this.route.snapshot.params['id']);
  ngOnInit(): void {
    this.idNV = Number(this.route.snapshot.params['id']);
    this.d.getMotNhanVien(this.idNV).subscribe(data => {
      this.nv = data;
    });
  }


}
