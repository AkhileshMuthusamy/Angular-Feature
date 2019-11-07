import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { HnService } from './hn.service';
/**
 * https://alligator.io/angular/route-resolvers/
 */
@Injectable({
  providedIn: 'root'
})
export class HnResolver implements Resolve<any> {
  constructor(private hnService: HnService) {}

  resolve() {
    console.log('I am in Resolver class');
    return this.hnService.getTopPosts();
  }
}
