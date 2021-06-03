import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../models/app-state';
import { SearchParams } from '../models/search-params';
import { SearchResult } from '../models/search-result';
import { StateService } from './state.service';

const initialState: AppState = {
  searchParams: {
    owner: '',
    repo: ''
  },
  searchResult: [{
    full_name: '',
    owner: {
      login: ''
    },
    html_url: '',
    stargazers_count: 0
  }],
  totalItems: 0,
  page: 1,
  isError: false,
  isDataLoaded: false
}

@Injectable({
  providedIn: 'root'
})
export class StoreService extends StateService<AppState> {

  constructor() {
    super(initialState)
  }

  get searchParams(): Observable<SearchParams> {
    return this.selectState(state => state.searchParams)
  }

  get searchResult(): Observable<SearchResult[]> {
    return this.selectState(state => state.searchResult)
  }

  get totalItems(): Observable<number> {
    return this.selectState(state => state.totalItems)
  }

  get page(): Observable<number> {
    return this.selectState(state => state.page)
  }

  get isError(): Observable<boolean> {
    return this.selectState(state => state.isError)
  }

  get isDataLoaded(): Observable<boolean> {
    return this.selectState(state => state.isDataLoaded)
  }

  setSearchParams(params: SearchParams) {
    this.setState({searchParams: params})
    localStorage.setItem('searchParams', JSON.stringify(params))
  }

  setSearchResult(result: SearchResult[]) {
    this.setState({searchResult: result})
  }
  
  setTotalItems(items: number) {
    this.setState({totalItems: items})
    localStorage.setItem('forksCount', JSON.stringify(items))
  }

  setPage(page: number) {
    this.setState({page: page})
  }

  setIsError(isError: boolean) {
    this.setState({isError: isError})
  }

  setIsDataLoaded(load: boolean) {
    this.setState({isDataLoaded: load})
  }

  fromCache() {
    this.setTotalItems(JSON.parse(localStorage.getItem('forksCount')!))
    this.setSearchParams(JSON.parse(localStorage.getItem('searchParams')!))
  }
}