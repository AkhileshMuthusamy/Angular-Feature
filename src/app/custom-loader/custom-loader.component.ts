import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-loader',
  templateUrl: './custom-loader.component.html',
  styleUrls: ['./custom-loader.component.css']
})
export class CustomLoaderComponent implements OnInit {
  isLoading = true;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isLoading = !this.isLoading;
  }
}
