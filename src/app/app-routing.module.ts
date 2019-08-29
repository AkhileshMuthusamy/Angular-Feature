import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';
import { OverlaySpinnerTestComponent } from './overlay-spinner-test/overlay-spinner-test.component';


const routes: Routes = [
          {path: 'fileupload', component: FileUploadComponent},
          {path: 'sessionstrg', component: SessionstorageComponent},
          {path: 'overlay-spinner', component: OverlaySpinnerTestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
