import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatToolbarModule,
  MatMenuModule,
  MatDividerModule,
  MatBadgeModule
} from '@angular/material';

const materials = [
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatToolbarModule,
  MatMenuModule,
  MatDividerModule,
  MatBadgeModule
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule {}
