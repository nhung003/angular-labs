import { Injectable } from '@angular/core';
import { ISanpham } from './isanpham';

@Injectable({
  providedIn: 'root'
})
export class SanPhamService {

  constructor() { }

  products:ISanpham[] = [
    { 
     id:1, tensp:'Leaf Rake', code: 'GDN-0011', giasp:19.95,
     mota:'Leaf rake with 48-inch wooden handle',
     urlImage:'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
     ngay:'March 19, 2016', starRate:3.2
    }, 
    { 
     id:2, tensp:'Garden Cart', code: 'GDN-0023', giasp:32.99,
     mota:'15 gallon capacity rolling garden cart',
     urlImage:'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
     ngay:'March 18, 2016', starRate:4.2
    }, 
    { 
     id:5, tensp:'Hammer', code: 'TBX-0048', giasp:8.9,
     mota:'Curved claw steel hammer',
     urlImage:'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
     ngay:'May 21, 2016', starRate:3.8
    }, 
    { 
     id:8, tensp:'Saw', code: 'TBX-0022', giasp:11.55,
     mota:'15-inch steel blade hand saw',
     urlImage:'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
     ngay:'May 15, 2016', starRate:3.7
    }, 
    { 
     id:10, tensp:'Video Game Controller', code: 'GMG-0042', giasp:35.95,
    mota:'Standard two-button video game controller',
    urlImage:'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
    ngay:'October 15, 2015', starRate:4.6
    }, 
    ]

    getSanPham(){
      return this.products;
    }
    getMotSanPham(id:number=0){
      return this.products.find(sp => sp.id==id);
    }
    themSanPham(sp:ISanpham=<ISanpham>{}){
      this.products.push(sp);
    }
    capnhatSanPham(sp:ISanpham=<ISanpham>{}){
      let index = this.products.findIndex(p => p.id === sp.id);
      this.products[index]=sp;
    }
    xoaSanPham(id:number=0){
      let index = this.products.findIndex(p => p.id == id);
      this.products.splice(index);
    }
    // xoaSanPham(index: number) {
    //   this.products.splice(index, 1);
    // }
}
