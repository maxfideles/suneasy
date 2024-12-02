import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {


  baseUrl!:string;
  stripeResponse:any;

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.sunAPI;
  }


  createSubscriptionSession(payload:any):Observable<any>{

    this.stripeResponse = this.http.post(`${this.baseUrl}stripe/subscription`,payload).pipe(
      catchError((err:any, caught:Observable<any>) => {
        return caught;
      })
    )

    return this.stripeResponse;

  }

}
