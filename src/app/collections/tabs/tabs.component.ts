import { Component, OnInit } from '@angular/core';
import { CollectionsTabs } from "../../Pages";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
    tabRoutes = CollectionsTabs

  constructor() { }

  ngOnInit(): void {
  }

}
