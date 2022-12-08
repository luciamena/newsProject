import { Injectable } from '@angular/core';
import { INews } from '../models/interfaces/News.interface';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public allNews: BehaviorSubject<INews[] | undefined> = new BehaviorSubject<INews[] | undefined>(undefined);
  public allArchive: BehaviorSubject<INews[] | undefined> = new BehaviorSubject<INews[] | undefined>(undefined);
  constructor(
    private http: HttpClient
  ) {

  }
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log(`An error has occurred: ${error.message}`);
    } else {
      console.log(`Error backend: ${error.status}. Error: ${error.error}`);

    }
    return throwError(() => new Error('Error in the request'));
  }
  getNews(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/news`).pipe(
      catchError(this.handleError)
    );
  }
  getArchived(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/news/archived`).pipe(
      catchError(this.handleError)
    );
  }
  addNews(newsData: INews): Observable<any> {
    return this.http.post(`${environment.apiUrl}/news`, newsData).pipe(
      catchError(this.handleError)
    );
  }
  updateArchive(id: string): Observable<any> {
    const opts = {
      params: new HttpParams({ fromObject: { id } })
    };
    return this.http.put(`${environment.apiUrl}/news/${id}`, opts).pipe(
      catchError(this.handleError)
    );
  }

  deleteNew(id: string): Observable<any> {
    const opts = {
      params: new HttpParams({ fromObject: { id } })
    };
    return this.http.delete(`${environment.apiUrl}/news/${id}`, opts).pipe(
      catchError(this.handleError)
    );
  }


  //DATA NEWS
  getAllNews(): BehaviorSubject<any> {
    if (this.allNews.getValue() === undefined) {
      this.resetAllNews();
    }

    return this.allNews;
  }
  resetAllNews(): void {
    this.getNews().subscribe(
      {
        next: (res) => {
          const newNews = res.data
          this.allNews.next(newNews)
        },
        error: error => this.allNews.next(undefined),

      });
  }
  //DATA ARCHIVE
  getAllArchive(): BehaviorSubject<any> {
    if (this.allArchive.getValue() === undefined) {
      this.resetAllArchive();
    }

    return this.allArchive;
  }
  resetAllArchive(): void {
    this.getArchived().subscribe(
      {
        next: (res) => {
          const newArchive = res.data
          this.allArchive.next(newArchive)
        },
        error: error => this.allArchive.next(undefined),

      });
  }

  clearData(): void {
    this.allNews.next(undefined);
    this.allArchive.next(undefined);
  }
}
