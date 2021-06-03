import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { DataService } from 'src/app/services/data.service'
import { StoreService } from 'src/app/services/store.service'
import { rowAnimation } from '../../utils/animations'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  animations: [rowAnimation]
})

export class ResultsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: StoreService,
    private data: DataService
  ) {}

  isDataLoaded!: Observable<boolean>
  isError!: Observable<boolean>
  totalItems!: Observable<any>
  dataSource!: Observable<any>
  currentPage!: Observable<any>
  displayedColumns: string[] = ['Repository', 'Owner', 'Link', 'Stars']
  onErrorText: string = 'Wrong repository name or it does not have forks!'

  ngOnInit() {
    this.store.fromCache()

    this.isDataLoaded = this.store.isDataLoaded
    this.totalItems = this.store.totalItems
    this.dataSource = this.store.searchResult
    this.currentPage = this.store.page
    this.isError = this.store.isError
    
    this.route.queryParams.subscribe((params) => {
      this.store.setPage(params.page)
      this.data.search(false)
    })
  }

  pageChanged(event: number) {
    this.router.navigate(['results'], {queryParams: {page: `${event}`}})
  }

  showError() {
    this.onErrorText = 'Тhe page you selected does not exist!'
  }
}