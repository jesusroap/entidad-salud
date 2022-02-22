import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-admin',
  templateUrl: './breadcrumb-admin.component.html',
  styleUrls: ['./breadcrumb-admin.component.css']
})
export class BreadcrumbAdminComponent implements OnInit {

  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
