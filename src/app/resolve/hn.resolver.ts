import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HnResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    console.log('I am in Resolver class');
    return of('Hello Akhilesh').pipe(delay(2000));
  }
}
