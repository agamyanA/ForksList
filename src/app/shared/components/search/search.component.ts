import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { DataService } from 'src/app/services/data.service'
import { StoreService } from 'src/app/services/store.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private store: StoreService,
    private data: DataService,
    private router: Router
  ) {}

  inputValue!: Observable<any>  
  searchInfo: string[] = []
  searchForm: FormGroup = this.fb.group({
    input: null
  })

  get input() {
    return this.searchForm.controls.input
  }

  ngOnInit() {
    this.inputValue = this.input.valueChanges.pipe(startWith(''))
  }

  onSubmit() {
    this.searchInfo = this.input.value.split('/')
    this.store.setSearchParams({
      owner: this.searchInfo[0].trim(),
       repo: this.searchInfo[1].trim()
    })
    this.store.setPage(1)
    this.data.search(true)
    this.router.navigate(['results'], {queryParams: {page: `1`}})
  }
}