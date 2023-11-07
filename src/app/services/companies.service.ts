import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from 'popper.js';
import { Company, Prod } from 'app/model/company';
import { Rep } from 'app/model/company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  queryParams = {companyId:'84551192-4e04-4067-b07f-90b516077f1f'}

  private apiUrl = 'http://13.245.165.147/api/company'
  private apiRep = 'http://13.245.165.147/api/rep'
  private apiDisCom = "http://13.245.165.147/api/company/{{companyId}}"
  private addCom='http://13.245.165.147/api/products'
  private prod=`http://13.245.165.147/api/products?companyId=${this.queryParams.companyId}`

  constructor(private http : HttpClient) { }

  getData():Observable<Company>{
    return this.http.get<Company>(this.apiUrl)
  }

  getRep():Observable<Rep>{
    return this.http.get<Rep>(this.apiRep)
  }

  delCom(id:any):Observable<any>{
    return this.http.delete(this.apiDisCom)
  }

  getProducts():Observable<Prod>{
    return this.http.get<Prod>(this.prod)
  }

  


}
