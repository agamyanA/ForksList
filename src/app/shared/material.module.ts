import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination'


@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    NgxPaginationModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    NgxPaginationModule
  ]
})
export class MaterialModule { }