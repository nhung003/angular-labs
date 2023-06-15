import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ISanpham } from '../isanpham';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  products: ISanpham[] = [
    {id:1, tensp:'Leaf Rake', code: "GDN-001", giasp:19.95, 
    mota:'Leaf rake with 48-inch wooden handle',
    urlImage:'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
    ngay:'March 19, 2016', starRate:3.2},
    { id:2, tensp:'Garden Cart', code: 'GDN-0023', giasp:32.99,
  mota:'15 gallon capacity rolling garden cart',
  urlImage:'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
  ngay:'March 18, 2016', starRate:4.2
  }, 
  { id:5, tensp:'Hammer', code: 'TBX-0048', giasp:8.9,
  mota:'Curved claw steel hammer',
  urlImage:'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
  ngay:'May 21, 2016', starRate:3.8
  },
{ id:8, tensp:'Saw', code: 'TBX-0022', giasp:11.55,
  mota:'15-inch steel blade hand saw',
  urlImage:'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
  ngay:'May 15, 2016', starRate:3.7
  }, 
  { id:10, tensp:'Video Game Controller', code: 'GMG-0042', giasp:35.95,
  mota:'Standard two-button video game controller',
  urlImage:'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
  ngay:'October 15, 2015', starRate:4.6
  }
  ];

  constructor(){}
    tukhoa:string='';
    listProduct:ISanpham[]=[]
    ngOnInit():void{
      this.listProduct=this.products;
    }

    locSP(){
      console.log(this.tukhoa)
      this.products = this.listProduct.filter(p=>p.tensp.includes(this.tukhoa))
    }
  
  @Output() capnhatidSP = new EventEmitter(); 
  xemChiTiet(id:number=0){ 
   var sp = this.products.find(sp=> sp.id==id);   
   this.capnhatidSP.emit(sp);
  }
 
}

