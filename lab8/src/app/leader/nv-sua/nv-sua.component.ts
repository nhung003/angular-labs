import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../../du-lieu.service';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit{
  constructor(
    private router:Router,
    private activeRoute:ActivatedRoute,
    private d:DuLieuService
  ){}
  nv:any;
  idNV:number = Number(this.activeRoute.snapshot.params['id']);

  ngOnInit(): void{
    this.idNV = Number(this.activeRoute.snapshot.params['id']);
    this.d.getMotNhanVien(this.idNV).subscribe(data => {
      this.nv = data;
    });
  }

  suaNhanVien(value:any){
    this.d.suaNhanVien(this.nv).subscribe (data => {
      alert('Sửa dự án thành công');
      this.router.navigate(['/leader/nv'], { replaceUrl: true });
    });
  }
}
