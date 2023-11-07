import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { DashComponent } from './dash/dash.component';
import { ProductsComponent } from './products/products.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthInterceptor } from './interceptor/auth';

// import { AuthInterceptor } from './interceptor/auth';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgSelectModule

    
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashComponent,
    ProductsComponent,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi : true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
