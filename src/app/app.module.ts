import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';
import { MaterialModule } from './shared/modules/material.module';
// import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

@NgModule({
  declarations: [AppComponent, FileUploadComponent, SessionstorageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
