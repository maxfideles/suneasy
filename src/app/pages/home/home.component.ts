import { Component, OnInit } from '@angular/core';
import { PanelsService} from 'src/app/services/panels.service';
import { PanelData} from 'src/app/models/panelData';
import { InverterData, InverterInfo } from 'src/app/models/inverterData'


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

  constructor(private service: PanelsService) { }

  ngOnInit(): void {

    
  }


}