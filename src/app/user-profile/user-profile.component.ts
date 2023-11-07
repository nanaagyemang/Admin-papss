import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'app/services/companies.service';
import { Rep } from 'app/model/company';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
data: Rep
  constructor( private service : CompaniesService) { }

  ngOnInit() {
    this.service.getRep().subscribe((response)=>{
      this.data = response;
      console.log(response)
    })
  }

}
