import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path:"User",
    children:[      
      {
        path:"content",
        component:ContentComponent,
        children:[
          {
            path:"dashboard",
            component:DashboardComponent,
          },
          {
            path:"userprofile",
            component:UserprofileComponent,
          },
          {
            path:"tablelist",
            component:TablelistComponent,
          },
          {
            path:"typography",
            component:TypographyComponent,
          },
          {
            path:"icons",
            component:IconsComponent,
          },
          {
            path:"maps",
            component:MapsComponent,
          },
          {
            path:"notifications",
            component:NotificationsComponent,
          },
          {
            path:"upgrade",
            component:UpgradeComponent,
          },
        ]
      },
      {
        path:"",
        redirectTo:"content",
        pathMatch:"full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
