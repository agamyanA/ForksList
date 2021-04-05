import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination'

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { GetDataService } from './get-data.service';
import { NoresultsComponent } from './noresults/noresults.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    ResultsComponent,
    NoresultsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [GetDataService, ResultsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
