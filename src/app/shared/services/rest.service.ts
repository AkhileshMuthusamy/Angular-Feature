import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  dummyEmployee: Observable<any>;
  dummySubcription: Subscription;

  private apiURL = 'http://dummy.restapiexample.com/api/v1/employees';

  constructor(private httpClient: HttpClient) {
    // this.dummyEmployee = this.getDummyEmployee();
  }

  get getDetails() {
    if (!this.dummyEmployee) {
      console.log('no dummyEmployee');
      this.dummyEmployee = this.getDummyEmployee().pipe(shareReplay(1));
    }
    console.log('outer cache');
    return this.dummyEmployee;
  }

  // getDetails() {
  //   this.getDummyEmployee().pipe(
  //     this.dummyEmployee
  //     tap(() => console.log('HTTP Executed')),
  //     shareReplay(1)
  //   );
  // }

  getDummyEmployee() {
    return this.httpClient.get(this.apiURL).pipe(map(res => res));
  }

  reloadDummyEmployee() {
    this.dummyEmployee = null;
  }
}
