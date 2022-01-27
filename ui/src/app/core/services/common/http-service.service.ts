import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  public get(uri: string, params?: any): Observable<any> {
    console.log(environment.api + uri);
    return this.httpClient.get<any>(environment.api + uri, { params: params });
  }

  public getWithoutParams(url: string): Observable<any> {
    return this.httpClient.get<any>(url);
  }
}
