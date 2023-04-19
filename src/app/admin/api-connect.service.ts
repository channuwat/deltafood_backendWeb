import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

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

  // save_success() {
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'บันทึกสำเร็จ...',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // }

  // save_error() {
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'error',
  //     title: 'บันทึกผิดผลาาด!',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // }
}
