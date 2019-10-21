import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';
import { MaterialModule } from './shared/modules/material.module';
import { SpinnerOverlayComponent } from './shared/component/spinner-overlay/spinner-overlay.component';
import { OverlaySpinnerTestComponent } from './overlay-spinner-test/overlay-spinner-test.component';
import { TestSpinnerComponent } from './overlay-spinner-test/test-spinner/test-spinner.component';
import { HtmlToJspdfComponent } from './html-to-jspdf/html-to-jspdf.component';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';
import { FlexHideComponent } from './flexLayout/flex-hide/flex-hide.component';
import { FlexlayoutComponent } from './flexLayout/flexlayout.component';
// import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    SessionstorageComponent,
    SpinnerOverlayComponent,
    OverlaySpinnerTestComponent,
    TestSpinnerComponent,
    HtmlToJspdfComponent,
    GeneratePdfComponent,
    FlexHideComponent,
    FlexlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
