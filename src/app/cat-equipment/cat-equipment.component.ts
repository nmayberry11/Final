import { Component, OnInit } from '@angular/core';
import { Equipment } from '../shared/equipment.model';


@Component({
  selector: 'app-cat-equipment',
  templateUrl: './cat-equipment.component.html',
  styleUrls: ['./cat-equipment.component.css']
})
export class CatEquipmentComponent {
equipment:Equipment[] =[

   ];


  constructor() { }

  ngOnInit(): void {
  }

}
