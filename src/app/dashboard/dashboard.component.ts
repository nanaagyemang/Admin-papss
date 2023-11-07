import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'app/services/companies.service';
import { Company } from 'app/model/company';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 data: Company;
  

  constructor(private  service : CompaniesService){}

  ngOnInit(): void {
    this.service.getData().subscribe((response)=>{
      this.data= response;
      console.log(response)
    })
  }

  delete(id:number):void{
    this.service.delCom(id).subscribe(
      ()=>{
        console.log('removedd')
      },
      (error)=>{
        console.error('Error deleting',error)
      }
    )
  }
 

}
