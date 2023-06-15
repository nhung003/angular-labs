import { Component, OnInit, Inject  } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';


@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent implements OnInit {
  
  constructor(
    private d:DuLieuService

    ){}
    listDuAn:any;
  ngOnInit(): void {

    this.d.getDuAn().subscribe(data => this.listDuAn = data);
  }

  xoaDA(id: number = 0) {
    if (confirm('Bạn có chắc muốn xóa dự án này không?')) {
      this.d.xoaDuAn(id).subscribe(() => {
        this.listDuAn = this.listDuAn.filter((duAn: any) => duAn.id !== id);
      });
    }
    return false;
  }
}

  
 

