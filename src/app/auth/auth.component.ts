import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  
  email:any
  password:any



  error : boolean;
  

  constructor( private route : Router , private service : AuthService ) { }
  // navigate(){
  //   this.router.navigate(['/user-profile']);
  //   console.log('huryy')
  // }
  ngOnInit(): void {
    
  }
  // onLogin(){
  //   this.service.login(this.loginObj).subscribe((res:any)=>{
  //     console.log(this.loginObj)
  //      this.route.navigate(['/user-profile'])
  //   })
  // }

  onSubmit(){
    this.service.login(this.email,this.password).subscribe
    (
      data =>{
        this.route.navigate(['/user-profile'])
      },
      error =>{
        this.error = error;
        Swal.fire({
          title: 'Oops ..Wrong Credentials',
          icon: 'error',
          text: 'Make sure your password and email is valid',

          // toast: true,
          position: 'center', // 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', 'bottom-end'
          showConfirmButton: true,
          // timer: 5000, // Auto-close after 5 seconds
        })
       
      }
    )
    console.log("hello")
  }

} 