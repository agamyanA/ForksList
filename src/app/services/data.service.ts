import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, withLatestFrom } from 'rxjs/operators';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private http: HttpClient,
    private store: StoreService
  ) {}

  private getForksCount(owner: string, repo: string) {
    const url = `https://api.github.com/repos/${owner}/${repo}`

    this.http.get(url).subscribe(
      (response: any) => this.store.setTotalItems(response.forks),
      () => console.log('no forks')
    )
  }

  private getSearchResult(owner: string, repo: string, currentPage: number) {
    const url = `https://api.github.com/repos/${owner}/${repo}/forks`

    const request = this.http.get(url, {
          params: new HttpParams().set('per_page', `30`).set('page', `${currentPage}`)
        })
    
    request.subscribe(
      (response: any) => this.onSuccess(response),
      () => this.store.setIsError(true),
      () => this.store.setIsDataLoaded(true)
    )
  }

  private onSuccess(response: any) {
    if (Object.keys(response).length === 0) {
      this.store.setIsError(true)
    } else {
      this.store.setSearchResult(response)
      this.store.setIsError(false)
    } 
  }

  search(forForksCount: boolean) {
    this.store.setIsDataLoaded(false)

    let params = this.store.searchParams.pipe(
        withLatestFrom(this.store.page),
        take(1)
      )

    params.subscribe((param) => {
      if (forForksCount) {
        this.getForksCount(param[0].owner, param[0].repo)
      } 
        this.getSearchResult(param[0].owner, param[0].repo, param[1])
    })
  }
}