import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  constructor(public http: HttpClient) { }

  getData(method: string) {
    return new Promise((reject, resove) => {
      this.http.get(environment.host + method).subscribe((res: any) => {
        reject(res)
      }, (error) => {
        resove(error)
      })
    })
  }

  postData(method: string, data: any) {
    return new Promise((reject, resove) => {
      this.http.post(environment.host + method, data).subscribe((res: any) => {
        reject(res)
      }, (error) => {
        resove(error)
      })
    })
  }

  getStore(key: string) {
    const store: any = localStorage.getItem(key)
    return JSON.parse(store)
  }

  setStore(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val))
  }

  copyVal(data: any) {
    let val = JSON.parse(JSON.stringify(data))
    return val
  }

  saveConfirm(fn) {
    Swal.fire({
      icon:'info',
      title: 'ยืนยันการบันทึก?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonColor:'#87cb16',
      confirmButtonText: 'บันทึก',
      cancelButtonText:'ปิด'
    }).then((result) => {
      if (result.isConfirmed) {
        fn()
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  delConfirm(fn) {
    Swal.fire({
      icon:'warning',
      title: 'ต้องการลบข้อมูลใช่หรือไม่?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonColor:'#ff4a55',
      confirmButtonText: 'ใช่, ลบข้อมูล',
      cancelButtonText:'ปิด'
    }).then((result) => {
      if (result.isConfirmed) {
        fn()
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  save_success() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'บันทึกสำเร็จ...',
      showConfirmButton: false,
      timer: 1500
    })
  }

  save_error() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'บันทึกผิดผลาาด!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
