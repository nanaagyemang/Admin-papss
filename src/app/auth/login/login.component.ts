import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginObj: any ={
    email :' ',
    password : ''
  }

  constructor(private service : AuthService, private route: Router ) { }

  ngOnInit(): void {
  }

  // onLogin(){
  //   this.service.login(this.loginObj).subscribe((res:any)=>{
  //      console.log('res',res)
  //      localStorage.setItem('token',res.token);
  //      this.route.navigateByUrl('/dashboard')
  //   })
  // }

}
