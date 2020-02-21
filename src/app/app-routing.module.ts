import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';
import { OverlaySpinnerTestComponent } from './overlay-spinner-test/overlay-spinner-test.component';
import { HtmlToJspdfComponent } from './html-to-jspdf/html-to-jspdf.component';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';
import { FlexlayoutComponent } from './flexLayout/flexlayout.component';
import { FormHandlingComponent } from './form-handling/form-handling.component';
import { HomeComponent } from './home/home.component';
import { HnResolver } from './resolve/hn.resolver';
import { ResolveComponent } from './resolve/resolve.component';
import { RestSampleComponent } from './rest-sample/rest-sample.component';
import { RestSampleTwoComponent } from './rest-sample-two/rest-sample-two.component';
import { NgxLoaderIndicatorComponent } from './ngx-loader-indicator/ngx-loader-indicator.component';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'resolve', component: ResolveComponent, resolve: { message: HnResolver } },
  { path: 'fileupload', component: FileUploadComponent },
  { path: 'sessionstrg', component: SessionstorageComponent },
  { path: 'overlay-spinner', component: OverlaySpinnerTestComponent },
  { path: 'htmltojspdf', component: HtmlToJspdfComponent },
  { path: 'generate-pdf', component: GeneratePdfComponent },
  { path: 'flex-layout', component: FlexlayoutComponent },
  { path: 'form-handling', component: FormHandlingComponent },
  { path: 'rest-sample', component: RestSampleComponent },
  { path: 'rest-sample2', component: RestSampleTwoComponent },
  { path: 'ngx-loader', component: NgxLoaderIndicatorComponent },
  { path: 'custom-loader', component: CustomLoaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HnResolver]
})
export class AppRoutingModule {}
