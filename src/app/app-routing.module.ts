import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';
import { OverlaySpinnerTestComponent } from './overlay-spinner-test/overlay-spinner-test.component';
import { HtmlToJspdfComponent } from './html-to-jspdf/html-to-jspdf.component';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';

const routes: Routes = [
  { path: 'fileupload', component: FileUploadComponent },
  { path: 'sessionstrg', component: SessionstorageComponent },
  { path: 'overlay-spinner', component: OverlaySpinnerTestComponent },
  { path: 'htmltojspdf', component: HtmlToJspdfComponent },
  { path: 'generate-pdf', component: GeneratePdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
