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

  @Input()
  endOfCatalog!:string

  constructor() { }

  ngOnInit(): void {
  }


  selectInverter(id:number):void{

    this.inverterSelected = this.inverter.find((a) => a.id==id)
    this.showInverterDetails = !this.showInverterDetails

   console.log(this.inverterSelected)

 }

 loadMore(){

    
  if(this.offsetChild<this.inverter.length){
    this.offsetChild+=20
    

    console.log("CHILD "+this.offsetChild)

      
  }else if(this.offsetChild>this.inverter.length){
    
    this.offsetChild=this.inverter.length
  
    console.log(this.inverter.length)
    console.log(this.offsetChild+ "IGUAL")

 }
  else if(this.offsetChild==this.inverter.length){
    this.endOfCatalog = "It is everything we have based on your search"
    
    setTimeout(() => {
    this.endOfCatalog = ""
    },4000)
    console.log(this.endOfCatalog + "Deleted!")
    }

    this.offsetOutput.emit(this.offsetChild)
  }

}
