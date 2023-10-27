import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PanelInfo } from 'src/app/models/panelData';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input()
  panel!:PanelInfo

  @Input()
  isclosed!:boolean

  @Input()
  state:boolean = false
  
   @Output() toogle = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  closeDetails(){
    this.state = false
    this.toogle.emit(this.state)
  }


}
