import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { ApiConnectService } from '../api-connect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string | undefined = undefined
  password: string | undefined = undefined

  constructor(public router: Router, public api: ApiConnectService) { }

  ngOnInit(): void {
  }

  login() {
    if (this.user == 'deltafood' && this.password == 'deltafood1234') {
      this.api.setStore('login', true)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'ยินดีต้อนรับ...',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['/'])
    } else {
      Swal.fire({
        icon: 'error',
        title: 'โปรดกรอก USER หรือ PASSWORD ให้ถูกต้อง!',
        showConfirmButton: true,
        confirmButtonColor: '#ff4a55',
        confirmButtonText: 'ตกลง, ฉันเข้าใจ'
      })
    }
  }

}
