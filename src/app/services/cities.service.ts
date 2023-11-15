import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { CityData } from '../models/cityData'
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  baseUrl!: string
  city: CityData | any 

  constructor(private http:HttpClient) {

    this.baseUrl = environment.sunAPI;

   }


   getCity(cityName:string,state:String):Observable<CityData>{

    this.city = this.http.get<CityData>(`${this.baseUrl}city/${cityName}/${state}`).pipe(

      catchError((err:any, caught: Observable<CityData>)  => {
        console.log(err)
        return caught
      
      })
      )
      return this.city

   }

}
