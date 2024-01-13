import { Component, OnInit } from '@angular/core';
import { InverterData, InverterInfo } from 'src/app/models/inverterData'
import { SimulatorService } from 'src/app/services/simulator.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 

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

  constructor(private service: SimulatorService) { }

  ngOnInit(): void {

    //this.simulateSystem()
    
  }

 /* simulateSystem(){
    this.service.simulate().subscribe((response) => {
      console.log(`Response: ${response}`)
      console.log(`Gen Mensal: ${response.genM}`)
      console.log(`Gen Anual: ${response.genT}`)
      console.log(`Pot Sys: ${response.potSys}`)
      console.log(`Num Mod: ${response.numMod}`)
    })
  }*/


}