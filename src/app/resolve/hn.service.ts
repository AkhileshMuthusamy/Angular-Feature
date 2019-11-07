import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HnService {
  endpoint = 'https://hnpwa.com/api/v0/news.json';

  constructor(private http: HttpClient) {}

  getTopPosts() {
    return this.http.get(this.endpoint, {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
      })
    });
  }
}
