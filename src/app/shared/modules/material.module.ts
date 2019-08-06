import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

const materials = [MatButtonModule, MatIconModule, MatTooltipModule];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule { }
