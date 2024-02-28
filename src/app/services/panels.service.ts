import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PanelData, PanelInfo} from '../models/panelData';
import { ResponseData } from '../models/responseData'
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanelsService {

  private panelsData: ResponseData | any
  private baseUrl: string

  private panelManufactories:any

  constructor(private http: HttpClient) { 

    this.baseUrl = environment.sunAPI

  }


  getPanels(page:number): Observable<ResponseData>{
    this.panelsData = this.http.get<ResponseData>(`${this.baseUrl}panels?page=${page}&size=10`).pipe(
      catchError( (err: any, caught: Observable<ResponseData>) => {
          console.log(err);
          return caught;
      }));

     return this.panelsData
  }

  getPanel(panelName:string): Observable<PanelInfo>{
    return this.http.get<PanelInfo>(`${this.baseUrl}panels/panelManufacturer/${panelName}`)
    
  }

  getManufacturerPanel(manufacturer:string): Observable<PanelData>{
    return this.http.get<PanelData>(`${this.baseUrl}panels/${manufacturer}`)

  }

  getPanelModelsFromManufacturerIdPaginated(id:number,page:number): Observable<PanelInfo[]>{
    return this.http.get<PanelInfo[]>(`${this.baseUrl}panels/id/${id}/pag?page=${page}&size=10`)
  }

  getPanelModelsFromManufacturerId(id:number): Observable<PanelInfo[]>{
    return this.http.get<PanelInfo[]>(`${this.baseUrl}panels/id/${id}`)
  }

  getPanelManufactories(): Observable<any>{
    this.panelManufactories = this.http.get<any>(`${this.baseUrl}panels/manufactures`).pipe(
      catchError( (err:any, caught: Observable<any>) => {
        console.log(err);
        return caught;
      })
    )
    return this.panelManufactories;
  }

}

