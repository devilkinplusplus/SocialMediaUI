import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http:HttpClient,@Inject('baseUrl') private baseUrl: string) { }

  private getUrl(requestParameter: Partial<RequestParameters>): string {
    return `
    ${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ''}
    `;
  }

  post<T>(requestParameter: Partial<RequestParameters>,body: Partial<T>): Observable<T> {
    let url: string = '';

    if (requestParameter.fullEndPoint) {
      url = requestParameter.fullEndPoint;
    } else {
      url = `${this.getUrl(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ''}`.replace(/\s/g, '');
    }
    return this.http.post<T>(url, body, {
      headers: requestParameter.headers,
    });
  }

  get<T>(requestParameter: Partial<RequestParameters>, id?: string): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.getUrl(requestParameter)}${id ? `/${id}` : ""}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`.replace(/\s/g, '');

    return this.http.get<T>(url, { headers: requestParameter.headers });
  }


  put<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.getUrl(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;

    return this.http.put<T>(url, body, { headers: requestParameter.headers });
  }

  delete<T>(requestParameter: Partial<RequestParameters>, id: string): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.getUrl(requestParameter)}/${id}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`;

    return this.http.delete<T>(url, { headers: requestParameter.headers });
  }

}


export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  queryString?: string;
  baseUrl?: string; //* If we use different base url
  fullEndPoint?: string; //* If we use totally different endpoint
}
