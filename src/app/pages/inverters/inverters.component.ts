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
  inverterInfo: any[]= []
  
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

  @Input()
  offset:number = 20


  constructor(private service: InvertersService) { }

  ngOnInit(): void {

    this.getInverters()
    
    setTimeout(()=> {
      this.sortInverters()
    },300)

  }

  sortInverters(){
    console.log("===Sorting===")

    this.inverterInfo = this.inverterInfo.sort((a,b) => a.capacity - b.capacity)

    console.log(this.inverterInfo)
    console.log("Sorted")

  }


  getInverters(){

    this.service.getInverters().subscribe((inverters) => {
      this.inverters = inverters.data
      console.log(this.inverters)

      for (let index = 0; index < this.inverters.length; index++) {
        this.getManufacturerInverter(this.inverters[index].manufacturer)
        
      }
        
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
    this.service.getInverterModelsFromManufacturerId(id).subscribe((response) =>{


      this.inverterInfo = response

      console.log(this.inverter)

    })
  }



  filterInverters(id:any){

    
    if(id!="All"){
     var idmanufacturer : number = this.inverters[id].id
 
     this.getInverterModelsFromManufacturerId(idmanufacturer)
     
 
    }else{
     this.inverterInfo = []
     console.log(this.inverterInfo)
     
     this.getInverters()
     setTimeout(()=> {
      this.sortInverters()
    },300)
     console.log(this.inverterInfo)
    }
    
     console.log(id)
     
 
   }



}
