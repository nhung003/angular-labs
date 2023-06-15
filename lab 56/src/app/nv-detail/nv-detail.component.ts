import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { ActivatedRoute } from '@angular/router';
import { NvService } from '../nv.service';

@Component({
  selector: 'app-nv-detail',
  templateUrl: './nv-detail.component.html',
  styleUrls: ['./nv-detail.component.css']
})
export class NvDetailComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private nvService:NvService
  ){}

  idNV:number = Number(this.route.snapshot.params['id']);
  nv = <NhanVien>{}; //obj rong the interface
  ngOnInit(): void {
    if(this.idNV<0) return;
    let kq = this.nvService.getMotNhanVien(this.idNV);
    if(kq==null) {this.nv={} as NhanVien;}
    else { this.nv = kq as NhanVien;}
  }


}
