import { Component, OnInit, Input } from '@angular/core';
import { PanelInfo } from 'src/app/models/panelData';

@Component({
  selector: 'app-card-panels',
  templateUrl: './card-panels.component.html',
  styleUrls: ['./card-panels.component.css']
})
export class CardPanelsComponent implements OnInit {
 @Input()
  panel:PanelInfo[] =[]
  
  panelSelected!:PanelInfo | any
  
  constructor() { }

  ngOnInit(): void {
  }


  selectPanel(id:number):void{

     this.panelSelected = this.panel.find((a) => a.id==id)

    console.log(this.panelSelected)

  }

}
