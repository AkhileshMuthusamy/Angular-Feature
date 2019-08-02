import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFile: File;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const file = event.target.files[0];
    console.dir(file);
  }

  onUpload() {
    const uploadData = new FormData();
    // * The name should match with the REST API field name
    uploadData.append('avatar', this.selectedFile, this.selectedFile.name);
    this.http.post<any>('http://localhost:3000/api/upload', uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      console.log(event); // handle event here
    });
  }
}
