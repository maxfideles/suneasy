import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { timeout } from 'rxjs';
import { PanelInfo } from 'src/app/models/panelData';
import { PanelsService } from 'src/app/services/panels.service';

@Component({
  selector: 'app-card-panels',
  templateUrl: './card-panels.component.html',
  styleUrls: ['./card-panels.component.css']
})
export class CardPanelsComponent implements OnInit {

 @Input()
  panel:PanelInfo[] =[]

  @Input()
  offsetChild!:any

  @Output()
  allsetOutput = new EventEmitter()

  @Output()
  manufacturerOutput = new EventEmitter()

@Output()
dropdownShown = new EventEmitter()

  @Input()
  endOfCatalog!:string
  
  showPanelDetails: boolean = false
  
  panelSelected!:PanelInfo | any


  @Input()
  filter:any
  
  constructor(private service: PanelsService) { }

  ngOnInit(): void {
  }


  selectPanel(id:number):void{

     this.panelSelected = this.panel.find((a) => a.id==id)
     this.showPanelDetails = !this.showPanelDetails

     this.dropdownShown.emit(!this.showPanelDetails);

    console.log(this.panelSelected)

  }

  dropdownStatus(value:boolean){
    this.showPanelDetails= value;
    this.dropdownShown.emit(!this.showPanelDetails);

  }

  loadMore(){
    console.log("LoadMore")
      this.allsetOutput.emit()
    }

  loadMoreFiltered(){
    console.log("manufacturer")
      this.manufacturerOutput.emit({id:this.filter})

    }

  }



