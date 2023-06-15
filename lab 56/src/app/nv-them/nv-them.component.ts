import { Component } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { NvService } from '../nv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent {

  constructor(
    private nvService: NvService,
    private router:Router,
  ){}

  nv: NhanVien = {} as NhanVien;
  ho:string='';
  ten:string='';
  date:string='';

  themNV(){
    const previousId = this.nvService.getLastId();
    const newId = previousId + 1;
    this.nv.id = newId;
    this.nvService.themNhanVien(this.nv);
    this.router.navigate(['/nv']);
  }
  ngOnInit(){};


  xuly(d:any){
    console.log("Data: ",d);
    console.log("ho=", this.ho);
  }
}
