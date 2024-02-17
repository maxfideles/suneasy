import { Component, OnInit, Input} from '@angular/core';
import { InverterData, InverterInfo } from 'src/app/models/inverterData'
import { ResponseInverterData } from 'src/app/models/responseData';
import { InvertersService} from 'src/app/services/inverters.service';


@Component({
  selector: 'app-inverters',
  templateUrl: './inverters.component.html',
  styleUrls: ['./inverters.component.css']
})
export class InvertersComponent implements OnInit {

  Item: string = "Fronius"

  inverters: InverterData[] = [{
    id: 0,
    manufacturer: "string",
    models:[{id: 0,
      name: "string",
      type: "string",
      capacity: 0,
      efficiency: 0,
      inputVoltageMin: 0,
      inputVoltageMax: 0,
      outputVoltage: 0,
      numberMPPTs: 0,
      maxInputCurrent: 0,
      maxOutputCurrent: 0,
      maxInputShortCircuitCurrent: 0,
      gridConnection: "string",
      gridVoltage: 0,
      weight: 0,
      warrantyYears: 0,
      manufacturer: "string"
    }]
}

  ]
  inverterInfo: InverterInfo[]= []
  
  inverter: InverterInfo = {
    id: 0,
    name: "string",
    type: "string",
    capacity: 0,
    efficiency: 0,
    inputVoltageMin: 0,
    inputVoltageMax: 0,
    outputVoltage: 0,
    numberMPPTs: 0,
    maxInputCurrent: 0,
    maxOutputCurrent: 0,
    maxInputShortCircuitCurrent: 0,
    gridConnection: "string",
    gridVoltage: 0,
    weight: 0,
    warrantyYears: 0,
    manufacturer: "string"
  }

  inverterManufactures: any

  @Input()
  offset:number = 20

  page:number = 0

  more:string = "All"

  isDropdownShown:boolean = true


  constructor(private service: InvertersService) { }

  ngOnInit(): void {

    this.getInverters();
    this.getInverterManufactores()
    

  }


  getInverters(){

    this.service.getInverters(this.page).subscribe((response) => {

      response.data.forEach((a) => {
        this.inverterInfo.push(a)
        console.log(a)
      })


      if(Object.keys(response.data).length != 0){
        this.page +=1;
      }else{
        alert("All inverters were loaded!")
      }


    })
  }


  getInverterManufactores(){

    this.service.getInverterManufactores().subscribe((response) => {

      this.inverterManufactures = response;

    })

  }


  getManufacturerInverter(manufacturer:string){
    this.service.getManufacturerInverter(manufacturer).subscribe((manu) => {

      manu.models.forEach((infos) => this.inverterInfo.push(infos))
      console.log(this.inverterInfo)
    }
    
    )
  }

  getInverter(inverterName: string){
    this.service.getInverter(inverterName).subscribe(
      {
        next: (response) =>
        {
          this.inverter = {
            id: response.id,
            name: response.name,
            type: response.type,
            capacity: response.capacity,
            efficiency: response.efficiency,
            inputVoltageMin: response.inputVoltageMin,
            inputVoltageMax: response.inputVoltageMax,
            outputVoltage: response.outputVoltage,
            numberMPPTs: response.numberMPPTs,
            maxInputCurrent: response.maxInputCurrent,
            maxOutputCurrent: response.maxOutputCurrent,
            maxInputShortCircuitCurrent: response.maxInputShortCircuitCurrent,
            gridConnection: response.gridConnection,
            gridVoltage: response.gridVoltage,
            weight: response.weight,
            warrantyYears: response.warrantyYears,
            manufacturer: response.manufacturer
          }
          console.log("inverter")
          console.log(this.inverter)
        }
      }

    )
  }

  getInverterModelsFromManufacturerId(id:number){
    this.service.getInverterModelsFromManufacturerId(id,this.page).subscribe((response) =>{


      response.forEach((a) => {
        this.inverterInfo.push(a)
      })

      if(Object.keys(response).length != 0){
        this.page +=1;
      }else{
        alert("All inverters were loaded!")
      }

    })
  }



  filterInverters(id:any){

    
    if(id!="All"){
      this.inverterInfo = []
      this.page=0;
     
      this.getInverterModelsFromManufacturerId(id)
     
     this.more = id;
 
    }else{
     this.inverterInfo = [];
     this.page=0;

     console.log(this.inverterInfo)
     
     this.getInverters()

     console.log(this.inverterInfo)
    }
    
     console.log(id)
     
 
   }



}
