import { Injectable } from '@angular/core';
import { InverterData, InverterInfo} from '../models/inverterData'
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InvertersService {

  baseUrl: string | any
  inverterData: InverterData | any


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

  getInverterModelsFromManufacturerId(id:number): Observable<InverterInfo[]>{
    return this.http.get<InverterInfo[]>(`${this.baseUrl}inverters/id/${id}`)
  }
}
