import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { NvService } from '../nv.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit{
  constructor(
    private nvService:NvService,
    private router:Router,
    private activeRoute:ActivatedRoute,
  ){}

  idNV:number = Number(this.activeRoute.snapshot.params['id']);
  nv:NhanVien = <NhanVien>{};// thong tin dang chinh
  ngOnInit(): void{
    let kq = this.nvService.getMotNhanVien(this.idNV);
    this.nv = kq as NhanVien;
  }

  capnhatNV(){
    this.nvService.capnhatNhanVien(this.nv);
    this.router.navigate(['/nv']);
  }
}
