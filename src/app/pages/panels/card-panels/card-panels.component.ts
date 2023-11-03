import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { timeout } from 'rxjs';
import { PanelInfo } from 'src/app/models/panelData';

@Component({
  selector: 'app-card-panels',
  templateUrl: './card-panels.component.html',
  styleUrls: ['./card-panels.component.css']
})
export class CardPanelsComponent implements OnInit {
 @Input()
  panel:PanelInfo[] =[]

  @Input()
  offsetChild!:number

  @Output()
  offsetOutput = new EventEmitter()

  @Input()
  endOfCatalog!:string
  
  showPanelDetails: boolean = false
  
  panelSelected!:PanelInfo | any
  
  constructor() { }

  ngOnInit(): void {
  }


  selectPanel(id:number):void{

     this.panelSelected = this.panel.find((a) => a.id==id)
     this.showPanelDetails = !this.showPanelDetails

    console.log(this.panelSelected)

  }

  loadMore(){

    
    if(this.offsetChild<this.panel.length){
      this.offsetChild+=20
      

      console.log("CHILD "+this.offsetChild)

        
    }else if(this.offsetChild>this.panel.length){
      
      this.offsetChild=this.panel.length
    
      console.log(this.panel.length)
      console.log(this.offsetChild+ "IGUAL")

   }
    else if(this.offsetChild==this.panel.length){
      this.endOfCatalog = "It is everything we have based on your search"
      
      setTimeout(() => {
      this.endOfCatalog = ""
      },4000)
      console.log(this.endOfCatalog + "Deleted!")
      }

      this.offsetOutput.emit(this.offsetChild)
    }
  }



