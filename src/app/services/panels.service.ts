import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PanelData, PanelInfo} from '../models/panelData';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanelsService {

  private baseUrl: string

  constructor(private http: HttpClient) { 

    this.baseUrl = environment.sunAPI

  }


  getPanels(): Observable<PanelData[]>{
    return this.http.get<PanelData[]>(`${this.baseUrl}panels`).pipe(catchError(
      (err: any, caught: Observable<PanelData[]>) => {
          console.log(err);
          return caught;
      }));;
     
  }

  getPanel(panelName:string): Observable<PanelInfo>{
    return this.http.get<PanelInfo>(`${this.baseUrl}panels/panelManufacturer/${panelName}`)
    
  }

  getManufacturerPanel(manufacturer:string): Observable<PanelData>{
    return this.http.get<PanelData>(`${this.baseUrl}panels/${manufacturer}`)

  }

  getPanelModelsFromManufacturerId(id:number): Observable<PanelInfo[]>{
    return this.http.get<PanelInfo[]>(`${this.baseUrl}panels/id/${id}`)
  }

}

