import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoresultsComponent } from './noresults/noresults.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'noresults', component: NoresultsComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
