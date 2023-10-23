import { Component, OnInit } from '@angular/core';
import { InverterData, InverterInfo } from 'src/app/models/inverterData'
import { InvertersService} from 'src/app/services/inverters.service';


@Component({
  selector: 'app-inverters',
  templateUrl: './inverters.component.html',
  styleUrls: ['./inverters.component.css']
})
export class InvertersComponent implements OnInit {

  Item: string = "Fronius"

  inverters: InverterData[] = []

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




  constructor(private service: InvertersService) { }

  ngOnInit(): void {

    this.getInverters()

  }



  getInverters(){

    this.service.getInverters().subscribe((inverters) => {
      this.inverters = inverters
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



}
