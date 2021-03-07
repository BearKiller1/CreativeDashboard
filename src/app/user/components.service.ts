import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  components = [
    {name:"Dashboard", path:"../content/dashboard", icon:"dashboard"},
    {name:"User Profile", path:"../content/userprofile", icon:"	account_circle"},
    {name:"Table List", path:"../content/tablelist", icon:"	event_note"},
    {name:"Typography", path:"../content/typography", icon:"library_books"},
    {name:"Icons", path:"../content/icons", icon:"circle"},
    {name:"Maps", path:"../content/maps", icon:"	add_location"},
    {name:"Notifications", path:"../content/notifications", icon:"add_alert"},
    {name:"Upgrade To PRO", path:"../content/upgrade", icon:"upgrade"}
  ]
  constructor() { }
  getAll(){
    return this.components;
  }
}
