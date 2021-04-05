import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  constructor(private http: HttpClient) { }

  searchValue: Array<string> = [];

  private searchHandler() {
    const input = (<HTMLInputElement><unknown>document.querySelector('#search')).value;
    
    this.searchValue = input.split('/')
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 404) {
      location.replace('noresults')
    }

    return throwError(error)
  }

  fetching(): Observable<object> {
    this.searchHandler();

    return this.http.get(`https://api.github.com/repos/${this.searchValue[0]}/${this.searchValue[1]}/forks`,
                    {
                      params: new HttpParams().set('per_page', `100`)
                    }).pipe(
                      catchError(this.errorHandler)
                    )
  }

  dataToLocalStorage() {
    this.fetching().subscribe(data => localStorage.setItem('data', JSON.stringify(data)))
  }

}
