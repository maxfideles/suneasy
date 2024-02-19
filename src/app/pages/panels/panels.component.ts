import { Component, Input, OnInit } from '@angular/core';
import { PanelsService} from 'src/app/services/panels.service';
import { PanelData, PanelInfo} from 'src/app/models/panelData';
import { environment } from 'src/environments/environment';


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
  
  panelInfo: PanelInfo[] = []

  panelManufactories:any

  page:number = 0

  more:string = "All"

  isDropdownShown!:boolean


  constructor(private service: PanelsService) {
    this.isDropdownShown = environment.aux;
  }

  ngOnInit(): void {

    this.getPanels();
    this.getPanelManufactories();

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
    this.service.getPanels(this.page).subscribe((response) => {
      response.data.forEach((a) => this.panelInfo.push(a));


      if(Object.keys(response.data).length != 0){
        this.page +=1;
      }else{
        alert("All Panels Were Loaded!");
      }

      

    })

    }

    getPanelManufactories(){
      this.service.getPanelManufactories().subscribe((response)=> {

        console.log(response.id)
        this.panelManufactories = response;

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
    this.service.getPanelModelsFromManufacturerIdPaginated(id,this.page).subscribe((response) =>{


      response.forEach((a) => {this.panelInfo.push(a)})

      if(Object.keys(response).length != 0){
        this.page+= 1;
      }else{
        alert("All Panels Were Loaded!");
      }

      console.log(this.panelInfo)

    })
  }

  filterPanels(id:any){
    
    console.log(id)

   if(id!="All"){
    this.panelInfo = [];
    this.page=0;
 
    this.getPanelModelsFromManufacturerId(id);

    this.more = id;

   }else{
    this.panelInfo = [];
    this.page = 0;

    this.getPanels();

    this.more = "All";

   }
    

  }
}
