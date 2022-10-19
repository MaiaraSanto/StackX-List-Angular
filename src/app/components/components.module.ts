import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [
    NavBarComponent,
  ],
})
export class ComponentsModule { }