import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'app/services/loading.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent {
  formData: any = {};
  tax_type: string='Inclusive'
  type : string ='Combo'
  selectedFile: File | undefined;
  selectedFile2: File | undefined;
  constructor(public loadingService: LoadingService, private http: HttpClient) { }

  onSubmit(){
    const formData = new FormData();
    formData.append('name',this.formData.name);
    formData.append('description',this.formData.description);
    formData.append('availability',this.formData.availability);
    formData.append('sku',this.formData.sku);
    formData.append('weight',this.formData.weight);
    formData.append('type',this.type);
    formData.append('cost',this.formData.cost);
    formData.append('unit',this.formData.unit);
    formData.append('tax_type', this.tax_type);
    formData.append('category',this.formData.category);
    if (this.selectedFile2) {
      formData.append('image', this.selectedFile2, this.selectedFile2.name);
    }
    if (this.selectedFile) {
      formData.append('brochure', this.selectedFile, this.selectedFile.name);
    }
    this.loadingService.startLoading();
    // Send the FormData to the server
    const queryParams = {companyId:'84551192-4e04-4067-b07f-90b516077f1f'}
    this.http.post(`http://13.245.165.147/products?companyId=${queryParams.companyId}`, formData).subscribe(
      (response:any) => {
        Swal.fire({
          title: 'Products Upload successfully',
          icon: 'success',
          text:'Products was successfully uploaded',
          // toast: true,
          position: 'center', // 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', 'bottom-end'
          showConfirmButton: true,
          // timer: 5000, // Auto-close after 5 seconds
        })
        this.loadingService.stopLoading();
      },
      (error) => {
        this.loadingService.stopLoading();
        alert(error);
      }
      
    );
  }

  onFileSelected(event: any) {
    // Capture the selected file
    this.selectedFile = event.target.files[0];
  }

  onFileSelected2(event: any) {
    // Capture the selected file
    this.selectedFile2 = event.target.files[0];
  }
  

}
