import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthenticateGuard } from './guard/authenticate.guard';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  }, {
    path: '',
    canActivate:[AuthenticateGuard],
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [{
      path: '',
      loadChildren:() =>import('./auth/auth.module').then(m =>m.AuthModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
