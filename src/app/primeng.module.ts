import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';


//Modulos PrimeNg
const modPrimeNg: any = [
  ButtonModule,
  BreadcrumbModule,
  CardModule,
  InputTextareaModule,
  PasswordModule,
  InputTextModule
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrimeNg
  ],
  exports:[
    modPrimeNg // Agregar arrglo de compotentes
  ]
})
export class PrimengModule { }
