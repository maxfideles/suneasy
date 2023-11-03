import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { InverterInfo } from 'src/app/models/inverterData';

@Component({
  selector: 'app-cardinverters',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  inverter: any[]=[]

  @Input()
  offsetChild:number = 20

  @Output()
  offsetOutput = new EventEmitter()

  inverterSelected: InverterInfo|any

  showInverterDetails:boolean = false

  constructor() { }

  ngOnInit(): void {
  }


  selectInverter(id:number):void{

    this.inverterSelected = this.inverter.find((a) => a.id==id)
    this.showInverterDetails = !this.showInverterDetails

   console.log(this.inverterSelected)

 }


}
