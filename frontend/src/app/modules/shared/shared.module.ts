import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbAdminComponent } from './breadcrumb-admin/breadcrumb-admin.component';



@NgModule({
  declarations: [
    BreadcrumbAdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbAdminComponent
  ]
})
export class SharedModule { }
