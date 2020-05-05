import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator'
import { ContextMenuModule } from 'ngx-contextmenu';
import { TreeModule } from 'angular-tree-component';
import { DataTablesModule } from 'angular-datatables';

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
import { FormHandlingComponent } from './form-handling/form-handling.component';
import { HomeComponent } from './home/home.component';
import { ResolveComponent } from './resolve/resolve.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { RestSampleComponent } from './rest-sample/rest-sample.component';
import { RestSampleTwoComponent } from './rest-sample-two/rest-sample-two.component';
import { NgxLoaderIndicatorComponent } from './ngx-loader-indicator/ngx-loader-indicator.component';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';
import { LoaderDirective } from './directives/loader.directive';
import { NgTreeComponent } from './ng-tree/ng-tree.component';
import { AngularDatatableComponent } from './angular-datatable/angular-datatable.component';
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
    FlexlayoutComponent,
    FormHandlingComponent,
    HomeComponent,
    ResolveComponent,
    RestSampleComponent,
    RestSampleTwoComponent,
    NgxLoaderIndicatorComponent,
    CustomLoaderComponent,
    LoaderDirective,
    NgTreeComponent,
    AngularDatatableComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    TreeModule.forRoot(),
    ContextMenuModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxLoaderIndicatorModule.forRoot(),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
