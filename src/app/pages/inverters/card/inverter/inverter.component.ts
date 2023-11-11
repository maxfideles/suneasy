import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { InverterInfo } from 'src/app/models/inverterData';

@Component({
  selector: 'app-inverter',
  templateUrl: './inverter.component.html',
  styleUrls: ['./inverter.component.css']
})
export class InverterComponent implements OnInit {

  constructor() { }


  @Input()
  inverter!:InverterInfo

  @Input()
  isclosed!:boolean

  @Input()
  state:boolean = false
  
   @Output() toogle = new EventEmitter()


  ngOnInit(): void {
  }


  closeDetails(){
    this.state = false
    this.toogle.emit(this.state)
  }


}
