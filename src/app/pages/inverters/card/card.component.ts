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

  @Output()
  manufacturerOutput = new EventEmitter()

  @Output()
  dropDownShown = new EventEmitter()

  inverterSelected: InverterInfo|any

  showInverterDetails:boolean = false

  @Input()
  endOfCatalog!:string

  @Input()
  filter:any

  constructor() { }

  ngOnInit(): void {
  }


  selectInverter(id:number):void{

    this.inverterSelected = this.inverter.find((a) => a.id==id)
    this.showInverterDetails = !this.showInverterDetails

   console.log(this.inverterSelected)

   this.dropDownShown.emit(!this.showInverterDetails)

 }

 loadMore(){

  this.offsetOutput.emit();
    
 }

 loadMoreFiltered(){
  console.log("manufacturer")
    this.manufacturerOutput.emit({id:this.filter})

  }

  dropdownStatus(status:boolean){

    this.showInverterDetails = status;

    this.dropDownShown.emit(!this.showInverterDetails);

  }

}
