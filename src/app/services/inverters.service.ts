import { Injectable } from '@angular/core';
import { InverterData, InverterInfo} from '../models/inverterData'
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData, ResponseInverterData } from '../models/responseData';


@Injectable({
  providedIn: 'root'
})
export class InvertersService {

  baseUrl: string | any
  invertersData: ResponseInverterData | any


  constructor(private http: HttpClient) { 
    this.baseUrl = environment.sunAPI
  }


  getInverters(): Observable<ResponseInverterData>{
    this.invertersData =  this.http.get<ResponseInverterData>(`${this.baseUrl}inverters`).pipe(catchError(
      (err: any, caught: Observable<ResponseInverterData>) => {
        console.log(err)
        return caught
      }
    ))
    return this.invertersData
  }

  getManufacturerInverter(manufacturer:string): Observable<InverterData>{
    this.invertersData = this.http.get<InverterData>(`${this.baseUrl}inverters/${manufacturer}`)

    return this.invertersData
  }

  getInverter(inverterName: string): Observable<InverterInfo>{
    return this.http.get<InverterInfo>(`${this.baseUrl}inverters/inverterManufacturer/${inverterName}`);
  }

  getInverterModelsFromManufacturerId(id:number): Observable<InverterInfo[]>{
    return this.http.get<InverterInfo[]>(`${this.baseUrl}inverters/id/${id}`)
  }
}
