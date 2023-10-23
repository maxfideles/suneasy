import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cardinverters',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  inverter: any[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
