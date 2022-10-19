import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrayFiltroPipe } from '../../pipes/array-filtro.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    ArrayFiltroPipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }