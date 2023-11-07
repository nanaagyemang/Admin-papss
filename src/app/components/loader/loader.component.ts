import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

 
  isLoading: boolean = true; // Initialize as true to show the loader initially

  ngOnInit() {
    // Simulate a delay (e.g., an HTTP request)
    setTimeout(() => {
      // Once data is loaded or the operation is complete, set isLoading to false
      this.isLoading = false;
    }, 2000); // Adjust the delay as needed
  }
}
