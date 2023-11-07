import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthComponent } from "./auth.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from "@angular/forms";
import { AuthInterceptorProvider } from "app/interceptor/auth";


const pages : any = [AuthComponent,LoginComponent];

const routes : Routes= [
   {
    path : '',
    component: AuthComponent,
    children: [
       {
        path:'',
        pathMatch:'full',
        redirectTo: 'auth'
       },
       {
        path: 'auth',
        component:AuthComponent
       }
    ]
   } 
];

@NgModule({
    declarations:[...pages],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule

    ],
    
    exports: [...pages]
})

export class AuthModule {}