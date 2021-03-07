import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  infoData = [
    {id:1, name:"User Space", info:"49/50 GB", subTitle:"Get More Space", icon:"content_copy",color:"image orange"},
    {id:2, name:"Revenue", info:"$34,245", subTitle:"Last 24 Hours", icon:"store", color:"image green"},
    {id:3, name:"Fixxed issues", info:"75", subTitle:"Tracked from Github", icon:"info_outline", color:"image red"},
    {id:4, name:"Followers", info:"+245", subTitle:"Just Uploaded", icon:"home", color:"image blue"}
  ]
  constructor() { }
  get(){
    return this.infoData;
  }
}
