import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-spinner',
  templateUrl: './test-spinner.component.html',
  styleUrls: ['./test-spinner.component.css']
})
export class TestSpinnerComponent implements OnInit {
  showSpinner = false;

  constructor() { }

  ngOnInit() {
  }

  loadSpinner() {
    this.showSpinner = true;
  }

}
