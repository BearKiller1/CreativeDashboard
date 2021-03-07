import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiagramsService {


  diagrams = [
    {
      id:1,
      name:"Daily Sales",
      info:"55% increase in today sales",
      subTitle:"Updated 4 minutes ago",
      icon:"far fa-clock",
      number:[40,30,20,10,0],
      date:["M","T","W","F","G"],
      color:"scheme green"
    },
    {
      id:2,
      name:"Email Subscription",
      info:"Last Compaign Performance",
      subTitle:"Campaign Send 4 days ago",
      icon:"far fa-clock",
      number:[800,600,400,200,0],
      date:["M","T","W","F","G"],
      color:"scheme orange"
    },
    {
      id:3,
      name:"Completed Tasks",
      info:"Last Campaign Performance",
      subTitle:"Campaign Send 4 days ago",
      icon:"far fa-clock",
      number:[800,600,400,200,0],
      date:["12p","3a","6d","12w","5a"],
      color:"scheme red"
    }
  ];
  constructor() { }
  getDiagram(){
    return this.diagrams;
  }
}
