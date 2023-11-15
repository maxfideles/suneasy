import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services/cities.service'
import { CityData } from '../../models/cityData'

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  city!: CityData

  constructor(private service: CitiesService) { }

  ngOnInit(): void {

    this.getCity("itumbiara","goiás")

  }


  getCity(cityName:string,state:string):void{

    this.service.getCity(cityName,state).subscribe((response)=>
    {
      this.city = response

      console.log(this.city)
    }
    

    )


  }

}
