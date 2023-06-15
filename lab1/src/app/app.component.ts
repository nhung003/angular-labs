import { Component } from '@angular/core';
import { Nhakhoahoc } from './nhakhoahoc';
import { ISanpham } from './ISanpham';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1';
  student = {
    hoten: 'Dao Thi Huong Nhung',
    phai: 0,
    ngaysinh: '2003-01-03',
    hinh: 'hinh1.jpg',
    diem: 6
  };

  listNhaKH: Nhakhoahoc[] = [
    { id: 1, ho: 'Ta Quang', ten: 'Buu', sinh: 1910, mat: 1986 },
    { id: 2, ho: 'Tran Dai', ten: 'Nghia', sinh: 1913, mat: 1997 },
    { id: 3, ho: 'Le Van', ten: 'Thiem', sinh: 1918, mat: 198 },
    { id: 4, ho: 'Nguyen Van', ten: 'Hieu', sinh: 1938, mat: 2022 },
    { id: 5, ho: 'Hoang', ten: 'Tuy', sinh: 1927, mat: 2019 }
  ];

  show(codehtml: string) {
    var kq = document.querySelector('#ds') as HTMLElement;
    kq.innerHTML = codehtml;
  }

  render() {
    let codehtml = this.listNhaKH
      .map(nkh => `<p>${nkh.id}. ${nkh.ho} ${nkh.ten} (${nkh.sinh} - ${nkh.mat})</p>`)
      .join('');
    this.show(codehtml);
  }

  // bai4

  listSP:ISanpham[] = [
    { 
    id:1, tensp:'Xiaomi Redmi Note 11', code: 'GDN-0011', giasp:5490000,
    mota:'Xiaomi Redmi Note 11 được xem như chiếc smartphone có giá tầm trung ấn tượng, với 1 cấu hình mạnh, cụm camera xịn sò, pin khỏe, sạc nhanh mà giá lại rất phải chăng.',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/245261/Xiaomi-redmi-note-11-blue-600x600.jpg',
    ngay:'2022-04-01', starRate:3.2
    }, 
    { id:2, tensp:'Phone 13 Pro Max 128GB ', code: 'GDN-0015', giasp:33490000,
    mota:'Máy thiết kế không mấy đột phá khi so với người tiền nhiệm, màn hình siêu đẹp, tần số quét nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-600x600.jpg',
    ngay:'2022-04-02', starRate:3.5
    }, 
    { 
    id:3, tensp:'Vivo Y33s', code: 'GDN-0018', giasp:6990000,
    mota:'Vivo Y33s thiết kế trẻ trung với màu đen tráng gương và xanh mộng mơ. Phiên bản màu đen được phủ lớp tráng gương sáng bóng, có thể trở thành chiếc gương tiện lợi',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/249102/Vivo-y33s-yellow-thumb-600x600.jpg',
    ngay:'2022-04-03', starRate:3.5
    }, 
    { 
    id:4, tensp:'OPPO Reno7 Z 5G', code: 'GDN-0020', giasp:10490000,
    mota:'Sản phẩm có thiết kế OPPO Glow độc quyền, camera mang hiệu ứng như máy DSLR chuyên nghiệp cùng viền sáng kép, có cấu hình mạnh mẽ và đạt chứng nhận xếp hạng A về độ mượt.',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-1-1-600x600.jpg',
    ngay:'2022-04-04', starRate:3.3
    },
    { 
    id:5, tensp:'Samsung Galaxy A03 3GB', code: 'GDN-0022', giasp:2990000,
    mota:'Là điện thoại Galaxy A đầu tiên của nhà Samsung trong năm 2022 tại VN. Sản phẩm có giá dễ tiếp cận, camera chính đến 48 MP, pin 5000 mAh thoải mái sử dụng cả ngày.',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/251856/samsung-galaxy-a03-xanh-thumb-600x600.jpg',
    ngay:'2022-04-02', starRate:3.2
    }, 
    { 
    id:6, tensp:'Samsung Galaxy A52s 5G 128GB', code: 'GDN-0023', giasp:10990000,
    mota:'Điện thoại Galaxy A52s 5G là phiên bản nâng cấp của Galaxy A52 5G, với ngoại hình không đổi nhưng được nâng cấp đáng kể về thông số cấu hình bên trong.',
    urlImage:'https://cdn.tgdd.vn/Products/Images/42/247507/samsung-galaxy-a52s-5g-mint-600x600.jpg',
    ngay:'2022-04-03', starRate:3.8
    },
    ];

    showSP(codehtml:string){
      var kq = document.querySelector('#listSP') as HTMLSelectElement;
      kq.innerHTML = codehtml;
    }
    renderSP(){
      let codehtml = '';
      this.listSP.forEach(sp => {
        codehtml += `
        <div style=" flex-basis: 30%; flex-grow: 1;flex-shrink: 1; box-sizing: border-box;text-align: center; border: 1px solid #ccc; margin: 5px;">
          <div class='card-header h5'style="background-color: #ccc; padding: 10px 0px;margin-bottom: 20px;">${sp.tensp}</div>
          <div class='card-body'>
            <img class="hinhsp mb-4" src="${sp.urlImage}" style="width:250px; height:300px">
            <p class="card-text">${sp.mota}</p>
            <a href="#" class="btn btn-primary">Xem chi tiet</a>
          </div>
          <div class="card-footer" style="background-color: #ccc; padding: 10px 0px; margin-top: 20px;">${sp.giasp}</div>
        </div>
        `
      });
      this.showSP(codehtml);
    }
}