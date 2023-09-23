import { Component, OnInit } from '@angular/core';
import { customerData } from '../data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers = customerData;
  
  constructor() {
    console.log("🚀 ~ file: list.component.ts:11 ~ ListComponent ~ customers:", this.customers);
   }

  ngOnInit(): void {
  }

}
