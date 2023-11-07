import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'app/services/loading.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent{

  formData: any = {}; // Form data object to hold other fields
  selectedFile: File | undefined;
  marital_status: string = 'Marital Status'
  title: string = 'Title'
  birth_country: string = "Country of Birth"
  resident_country: string = "Country of Residence"

  constructor(public loadingService : LoadingService,private http: HttpClient) { }

  resetFormData(formData:FormData){
    formData.forEach((_value,key)=>{
      formData.delete(key)
    })
  }

  onSubmit() {
    // Create a FormData object to send the form data, including the image file
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('city', this.formData.city);
    formData.append('state', this.formData.state);
    formData.append('title', this.title);
    formData.append('dob', this.formData.dob);
    formData.append('gender', this.formData.gender);
    formData.append('postal_code', this.formData.postal_code);
    formData.append('birth_country', this.birth_country);
    formData.append('marital_status', this.marital_status);
    formData.append('resident_country', this.resident_country);
    formData.append('first_nationality', this.formData.first_nationality);
    formData.append('second_nationality', this.formData.second_nationality);
    formData.append('primary_residential_address', this.formData.primary_residential_address);
    formData.append('secondary_residential_address',this.formData.secondary_residential_address);
    formData.append('email', this.formData.email);
    formData.append('alt_email', this.formData.alt_email);
    formData.append('home_telephone', this.formData.home_telephone);
    formData.append('mobile', this.formData.mobile);
    formData.append('work_telephone',this.formData.work_telephone);
    formData.append('education_level', this.formData.education_level);
    formData.append('employed', this.formData.employed);
    formData.append('company_name',this.formData.company_name);
    formData.append('company_address', this.formData.company_address);
    formData.append('company_email',this.formData.company_email);
    formData.append('company_phone', this.formData.company_phone);
    formData.append('company_country',this.formData.company_country);
    formData.append('place_of_birth',this.formData.place_of_birth);
    if (this.selectedFile) {
      formData.append('identification', this.selectedFile, this.selectedFile.name);
    }
    this.loadingService.startLoading();
    // Send the FormData to the server
    this.http.post('http://13.245.165.147/rep', formData).subscribe(
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
        alert(error);
      }
      
    );
  }

  onFileSelected(event: any) {
    // Capture the selected file
    this.selectedFile = event.target.files[0];
  }



}
