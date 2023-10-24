import { Component, Input, OnInit } from '@angular/core';
import { PanelsService} from 'src/app/services/panels.service';
import { PanelData, PanelInfo} from 'src/app/models/panelData';


@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {

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
  
  panelInfo: PanelInfo[]=[]



  constructor(private service: PanelsService) { }

  ngOnInit(): void {

    this.getPanels()

    setTimeout(() => {
      this.sortPanels()
    },400)

  }

  sortPanels(){
    console.log("===Sorting===")

    this.panelInfo = this.panelInfo.sort((a,b) => a.maximumPower - b.maximumPower)
    this.panels = this.panels.sort((a,b)=> a.manufacturer.localeCompare(b.manufacturer))

    console.log(this.panelInfo)
    console.log("Sorted")

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

  getPanelModelsFromManufacturerId(id:number){
    this.service.getPanelModelsFromManufacturerId(id).subscribe((response) =>{


      this.panelInfo = response

      console.log(this.panelInfo)

    })
  }

  filterPanels(id:any){
    
   if(id!="All"){
    var idmanufacturer : number = this.panels[id].id

    this.getPanelModelsFromManufacturerId(idmanufacturer)
    

   }else{
    this.panelInfo = []
    console.log(this.panelInfo)
    this.getPanels()
    setTimeout(() => {
      this.sortPanels()
    },400)
    console.log(this.panelInfo)
   }
   
    console.log(id)
    

  }
}
