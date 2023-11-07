import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'app/services/loading.service';
import { LoaderComponent } from 'app/components/loader/loader.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  formData: any = {}; // Form data object to hold other fields
  selectedFile: File | undefined;
  isLoading: boolean | undefined;
  selectedCar: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  constructor(private http: HttpClient,public loadingService : LoadingService) { }


  onSubmit() {
    // Create a FormData object to send the form data, including the image file
    let formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('description', this.formData.description);
    formData.append('address', this.formData.address);
    formData.append('email', this.formData.email);
    formData.append('phone', this.formData.phone);
    formData.append('category_name', this.formData.category_name);
    formData.append('country', this.formData.country);
    formData.append('person_last_name', this.formData.person_last_name);
    formData.append('person_first_name', this.formData.person_first_name);
    formData.append('person_email', this.formData.person_email);
    formData.append('person_phone', this.formData.person_phone);
    formData.append('services', this.formData.services);
    formData.append('keywords',this.formData.keywords);
    if (this.selectedFile) {
      formData.append('certificate', this.selectedFile, this.selectedFile.name);
    }

    this.loadingService.startLoading();

    // Send the FormData to the server
    this.http.post('http://13.245.165.147/company', formData).subscribe(
      (response:any) => {
        
        Swal.fire({
          title: 'Registered Successfully',
          icon: 'success',
          text:'Kindly check your email for a verification',
          // toast: true,
          position: 'center', // 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', 'bottom-end'
          showConfirmButton: true,
          // timer: 5000, // Auto-close after 5 seconds
        })
        this.loadingService.stopLoading();
      },
      (error) => {
        this.loadingService.stopLoading();
      
        Swal.fire({
          title:'Something went wrong',
          icon:'error',
          text:'Kindly try again',
          position: 'center', // 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', 'bottom-end'
          showConfirmButton: true
        })
      }
     
    );
    formData = new FormData();
    
  }

  onFileSelected(event: any) {
    // Capture the selected file
    this.selectedFile = event.target.files[0];
  }
  ngOnInit() {
  }

}
