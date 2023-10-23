import { Component, Input, OnInit } from '@angular/core';
import { InverterInfo } from '../models/inverterData';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input()
  item: InverterInfo[] = []

  constructor() { }

  ngOnInit(): void {

  }

}
