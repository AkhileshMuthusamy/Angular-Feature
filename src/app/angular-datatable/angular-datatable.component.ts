import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

class Person {
  id: string;
  'first_name': string;
  'last_name': string;
  email: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-angular-datatable',
  templateUrl: './angular-datatable.component.html',
  styleUrls: ['./angular-datatable.component.css']
})
export class AngularDatatableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  persons: Person[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      searching: false,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        
        that.http
          .get<DataTablesResponse>(
            'https://reqres.in/api/users/?page=',

          ).subscribe(resp => {
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
    };
    // this.loadTableData('1');
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  loadTableData(pageNumber) {
    this.http.get(`https://reqres.in/api/users?page=${pageNumber}`)
      .subscribe((response: any) => {

        this.persons = response.data;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

}
