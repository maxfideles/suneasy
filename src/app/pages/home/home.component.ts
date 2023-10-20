import { Component, OnInit } from '@angular/core';
import { SunService} from 'src/app/services/sun.service';
import { InverterData, InverterInfo, PanelData} from 'src/app/models/panelData';
import { delay, map } from 'rxjs';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  panels: PanelData[] = [{
    id: 0,
    manufacturer: "string",
    models: [{
      id: 0,
      name: "string",
      type: "string",
      efficiency: 0,
      maximumPower: 0,
      voltage: 0,
      current: 0,
      length: 0,
      width: 0,
      thickness: 0,
      weight: 0,
      frameColor: "string",
      warrantyYears: 0,
      manufacturer: ""
    }]
  }]
  panel = {
      id: 0,
      name: "string",
      type: "string",
      efficiency: 0,
      maximumPower: 0,
      voltage: 0,
      current: 0,
      length: 0,
      width: 0,
      thickness: 0,
      weight: 0,
      frameColor: "string",
      warrantyYears: 0,
      manufacturer:""
    }
  
  panelInfo: any[]=[]

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

  constructor(private service: SunService) { }

  ngOnInit(): void {
    this.getPanels()
//    this.getPanel("HiKu5 Mono CS3Y-475MS")
    this.getInverters()
    this.getInverter("sg20ktl-M")
    this.getPanel("HiKu5 Mono cs3Y-475MS")
    
  }

  getPanels(){
    this.service.getPanels().subscribe((panels) => {
     this.panels = panels;  
     console.log(this.panels)
    
     for (let index = 0; index < this.panels.length; index++) {
      this.getManufacturerPanel(this.panels[index].manufacturer)
      
      }

   })
    }

    getManufacturerPanel(manufacturer:string){
      this.service.getManufacturerPanel(manufacturer).subscribe((manu) => {

        manu.models.forEach((infos)=>{this.panelInfo.push(infos)})
        console.log(this.panelInfo)

      }
      )

  }

  getPanel(panelName:string){
    this.service.getPanel(panelName).subscribe(
      {
        next:(response) => {
          this.panel= {
            id: response.id,
            name: response.name,
            type: response.type,
            efficiency: response.efficiency,
            maximumPower: response.maximumPower,
            voltage: response.voltage,
            current: response.current,
            length: response.length,
            width: response.width,
            thickness: response.thickness,
            weight: response.weight,
            frameColor: response.frameColor,
            warrantyYears: response.warrantyYears,
            manufacturer: response.manufacturer            
          }

          console.log(this.panel)

        }
      }
    )
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