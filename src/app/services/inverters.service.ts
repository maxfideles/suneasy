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

  private invertersFiltered: any

  private inverterManufactores:any


  constructor(private http: HttpClient) { 
    this.baseUrl = environment.sunAPI
  }


  getInverters(page:number): Observable<ResponseInverterData>{
    this.invertersData =  this.http.get<ResponseInverterData>(`${this.baseUrl}inverters?page=${page}&size=10`).pipe(catchError(
      (err: any, caught: Observable<ResponseInverterData>) => {
        console.log(err)
        return caught
      }
    ))
    return this.invertersData
  }

  getInverterManufactores(): Observable<any>{
    this.inverterManufactores = this.http.get<any>(`${this.baseUrl}inverters/manufactures`).pipe(
      catchError( (err:any, caught: Observable<any>) => {
        console.log(err);
        return caught;
      } )
    )
    return this.inverterManufactores;
  }


  getManufacturerInverter(manufacturer:string): Observable<InverterData>{
    this.invertersData = this.http.get<InverterData>(`${this.baseUrl}inverters/${manufacturer}`)

    return this.invertersData
  }

  getInverter(inverterName: string): Observable<InverterInfo>{
    return this.http.get<InverterInfo>(`${this.baseUrl}inverters/inverterManufacturer/${inverterName}`);
  }

  getInverterModelsFromManufacturerId(id:number,page:number): Observable<InverterInfo[]>{
      
    this.invertersFiltered =  this.http.get<InverterInfo[]>(`${this.baseUrl}inverters/id/${id}/pag?page=${page}&size=10`).pipe(
      catchError((err:any,caught:Observable<InverterInfo[]>) => {
        console.log(err);
        return caught;
      })
    )

    return this.invertersFiltered;

  }
}
