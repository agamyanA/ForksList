import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {

  constructor(private getDataService: GetDataService, private router: Router, private route: ActivatedRoute) { }

  page: number = 1;

  ngOnInit(): void {

    this.page = this.route.snapshot.queryParams.page;
    
    if (this.getDataService.searchValue.length === 0) {
      this.dataSource = JSON.parse(localStorage.getItem('data')!)
    } else {
      this.dataSource = this.getDataService.fetching()
    }
  }
  
  pageChanged(event: any) {
    this.page = event;
    this.router.navigate(['results'], {queryParams: {page: `${event}`}});
  }

  displayedColumns: string[] = ['Repository', 'Owner', 'Link', 'Stars'];
  dataSource: any
}