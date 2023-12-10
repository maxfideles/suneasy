import { Component, Input, OnInit } from '@angular/core';
import { PanelsService} from 'src/app/services/panels.service';
import { PanelData, PanelInfo} from 'src/app/models/panelData';


@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {

  aux:PanelInfo[]=[]
  panels!: PanelData[] | any
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

  @Input()
  offset:number = 20


  constructor(private service: PanelsService) { }

  ngOnInit(): void {

    this.getPanels()

    /*setTimeout(() => {
      console.log(this.panels.id)
    },400)*/

  }

  sortPanels(){
    console.log("===Sorting===")

    this.panelInfo = this.panelInfo.sort((a,b) => a.maximumPower - b.maximumPower)
   // this.panels = this.panels.sort((a,b)=> a.manufacturer.localeCompare(b.manufacturer))

    console.log(this.panelInfo)
    console.log("Sorted")

  }

  getPanels(){
    this.service.getPanels().subscribe(
      {
        next: (response) => {
        
          this.panels = response.data
          console.log(this.panels)

          let aux:any
          let mod!: PanelData
          let det:any
          //this.panels.forEach((a) => {mod = (a.models)})
            aux = this.panels[0].models[0].name
            
          console.log(aux)

          for (let i = 0; i < this.panels.length; i++) {
            for (let j = 0; j < this.panels[i].models.length; j++) {
              
              this.panelInfo.push(this.panels[i].models[j])
              this.aux.push(this.panels[i].models[j])
              
            }
            
          }
          this.sortPanels()
          console.log(this.panelInfo)
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
    
     this.offset=20

   if(id!="All"){
    var idmanufacturer : string = this.panels[id].manufacturer

    this.panelInfo = this.aux
    console.log(this.panelInfo)
    console.log(idmanufacturer)

    this.panelInfo = this.aux.filter(a => a.manufacturer==idmanufacturer)
    //this.getPanelModelsFromManufacturerId(idmanufacturer)
    console.log(this.panelInfo)

   }else{
    this.panelInfo = this.aux
    console.log(this.panelInfo)
   }
   this.sortPanels()
    console.log(id)
    

  }
}
