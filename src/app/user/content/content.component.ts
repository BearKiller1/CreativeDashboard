import { Component, OnInit } from '@angular/core';
import {ComponentsService } from '../components.service'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  data:any;
  HeaderName:any;
  dashIcon = "https://www.flaticon.com/svg/vstatic/svg/1828/1828765.svg?token=exp=1614439499~hmac=36f56d79878416b4c97166a867c64065";
  notificIcon = "https://cdn0.iconfinder.com/data/icons/interface-solid-1/48/notification_bell_ring-512.png";
  userIcon = "http://download.seaicons.com/icons/mahm0udwally/all-flat/128/User-icon.png";
  constructor(private Obj:ComponentsService){}

  ngOnInit(): void {
    this.data = this.Obj.getAll();
  }
  setName(name:any){
    this.HeaderName = name;
  }
}
