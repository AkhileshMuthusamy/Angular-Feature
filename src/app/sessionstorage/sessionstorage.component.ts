import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessionstorage',
  templateUrl: './sessionstorage.component.html',
  styleUrls: ['./sessionstorage.component.css']
})
export class SessionstorageComponent implements OnInit {

  userName: string;

  constructor() { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('userName');
  }

  addValueToSessionStrg() {
    sessionStorage.setItem('userName', 'Akhilesh M');
    console.log('Added item to sessionStorage');
    this.getValueFromSessionStrg();
  }

  getValueFromSessionStrg() {
    this.userName = sessionStorage.getItem('userName');
    console.log(this.userName);
  }

  deleteValueFromSessionStrg() {
    sessionStorage.removeItem('userName');
    console.log('Removed item from sessionStorage');
  }

  clearSessionStrg() {
    sessionStorage.clear();
    console.log('Cleared Session Storage');
  }
}
