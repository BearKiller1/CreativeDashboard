import { Component, OnInit } from '@angular/core';

import {InfoService} from './info.service';
import {DiagramsService} from './diagrams.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  infoData:any;
  Diagram:any;

  constructor(
    private InfoObj:InfoService,
    private DiagramObj:DiagramsService
  ) { }

  ngOnInit(): void {
    this.infoData = this.InfoObj.get();

    this.Diagram = this.DiagramObj.getDiagram();
  }

}
