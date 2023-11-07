import { Component, OnInit } from '@angular/core';
import { Prod } from 'app/model/company';
import { CompaniesService } from 'app/services/companies.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
data: Prod
  constructor(private service : CompaniesService) { }

  

  ngOnInit(): void {
    this.service.getProducts().subscribe((response)=>{
      this.data=response;
      console.log(response)
    })
  }

}
