import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';


const routes: Routes = [
          {path: 'fileupload', component: FileUploadComponent},
          {path: 'sessionstrg', component: SessionstorageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
