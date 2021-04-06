import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  constructor(private http: HttpClient, private router: Router) { }

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

  fetching() {
    this.searchHandler();

    this.http.get(`https://api.github.com/repos/${this.searchValue[0]}/${this.searchValue[1]}/forks`,
                    {
                      params: new HttpParams().set('per_page', `100`)
                    }).pipe(

                      catchError(this.errorHandler)

                    ).subscribe(data => {

                        if (Object.keys(data).length === 0) {

                          this.router.navigate(['noresults'])

                        } else {
                            localStorage.setItem('data', JSON.stringify(data))
                            this.router.navigate(['results'], {queryParams: {page: `1`}})
                                      .then(() => location.reload())
                        }
                    })
  }
}