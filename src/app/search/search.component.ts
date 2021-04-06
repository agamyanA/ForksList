import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  constructor(private getDataService: GetDataService, private router: Router) { }

  btnDisabled: boolean = true;
  
  getData() {
    this.getDataService.fetching()
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

