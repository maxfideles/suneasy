import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { simulatorResponse } from '../models/simulatorResponse';
import { simulatorData } from '../models/simulatorData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  simResult!: simulatorResponse | any
  baseUrl!:string

  constructor(private http: HttpClient) {
    this.baseUrl = environment.sunAPI
   }

  simulate():Observable<simulatorResponse>{
    var data: simulatorData = {panelId:5,cityId:1817,cons:15000,inc:18,ori:270}
    this.simResult = this.http.post<simulatorResponse>(`${this.baseUrl}sim/res`,data).pipe(
      catchError((err:any, caught:Observable<simulatorResponse>) => {
        return caught
      })
    )
    console.log(this.simResult)
    return this.simResult
  }

}
