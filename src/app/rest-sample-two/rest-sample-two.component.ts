import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../shared/services/rest.service';

@Component({
  selector: 'app-rest-sample-two',
  templateUrl: './rest-sample-two.component.html',
  styleUrls: ['./rest-sample-two.component.css']
})
export class RestSampleTwoComponent implements OnInit {
  data;

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit() {}

  navigate() {
    this.router.navigate(['/rest-sample']);
  }

  loadData() {
    console.log('Calling loadData func.');
    this.restService.getDetails.subscribe(data => {
      this.data = data;
    });
  }
}
