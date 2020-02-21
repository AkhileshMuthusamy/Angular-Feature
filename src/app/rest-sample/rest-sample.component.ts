import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-sample',
  templateUrl: './rest-sample.component.html',
  styleUrls: ['./rest-sample.component.css']
})
export class RestSampleComponent implements OnInit {
  data;

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit() {}

  loadData() {
    console.log('Calling loadData func.');
    this.restService.getDetails.subscribe(data => {
      this.data = data;
    });
  }

  reload() {
    this.restService.reloadDummyEmployee();
  }

  navigate() {
    this.router.navigate(['/rest-sample2']);
  }
}
