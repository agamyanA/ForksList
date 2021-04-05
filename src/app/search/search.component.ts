import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../get-data.service';
import { ResultsComponent } from '../results/results.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  constructor(private getDataService: GetDataService, private results: ResultsComponent, private router: Router) { }

  btnDisabled: boolean = true;
  
  getData() {
    this.getDataService.fetching()
    .subscribe(data => {
                          if (Object.keys(data).length === 0) {
                              this.router.navigate(['noresults'])
                            } else {
                              this.results.dataSource = data;
                              this.router.navigate(['results'], {queryParams: {page: `${this.results.page}`}})
                                         .then(() => setInterval(() => location.reload(), 200))
                            }
                          })
    this.getDataService.dataToLocalStorage()
  }

  onInput() {
    const input = (<HTMLInputElement><unknown>document.querySelector('#search')).value;
  
    if (input.includes('/')) {
      this.btnDisabled = false
    } else {
      this.btnDisabled = true
    }
  }

}

