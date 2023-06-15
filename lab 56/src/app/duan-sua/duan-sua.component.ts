import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';


@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent  implements OnInit {
  constructor(
    private router:Router,
    private activeRoute:ActivatedRoute,
    private d:DuLieuService
  ){}

  listNhanVien:any;
  da:any;
  idDA:number = Number(this.activeRoute.snapshot.params['id']);

  ngOnInit(): void {
    this.d.getNhanVien().subscribe(data => this.listNhanVien = data);
    this.idDA = Number(this.activeRoute.snapshot.params['id']);
    this.d.getMotDuAn(this.idDA).subscribe(data => {
      this.da = data;
    });
  }
  suaDuAn(da:any){
    this.d.suaDuAn(this.da).subscribe (data => {
      alert('Sửa dự án thành công');
      this.router.navigate(['/duan'], { replaceUrl: true });
    });
  }
}