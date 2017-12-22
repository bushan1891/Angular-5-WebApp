import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatCardModule],
  exports: [MatButtonModule,MatToolbarModule,MatCardModule],
})
export class MaterialModule { }