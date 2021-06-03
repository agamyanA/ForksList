import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {page: 'home'}},
  {path: 'results', component: ResultsComponent,  data: {page: 'results'}},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }