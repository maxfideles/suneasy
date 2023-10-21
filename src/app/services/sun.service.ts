import { Injectable } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable, catchError, map } from 'rxjs';
import { PanelData, PanelInfo} from '../models/panelData';
import { InverterData, InverterInfo} from '../models/inverterData'

@Injectable({
  providedIn: 'root'
})
export class SunService {
  private baseUrl: string =""
  private panelData:  PanelData | any
  private panelInfo: PanelInfo | any
  private inverterData: InverterData | any
  private inverter: InverterInfo | any


  constructor(private http: HttpClient) { 

    this.baseUrl = environment.sunAPI

  }


  getInverters(): Observable<InverterData[]>{
    return this.http.get<InverterData[]>(`${this.baseUrl}inverters`).pipe(catchError(
      (err: any, caught: Observable<InverterData[]>) => {
        console.log(err)
        return caught
      }

    ))
  }

  getManufacturerInverter(manufacturer:string): Observable<InverterData>{
    this.inverterData = this.http.get<InverterData>(`${this.baseUrl}inverters/${manufacturer}`)

    return this.inverterData
  }

  getInverter(inverterName: string): Observable<InverterInfo>{
    return this.http.get<InverterInfo>(`${this.baseUrl}inverters/inverterManufacturer/${inverterName}`);
  }

}
