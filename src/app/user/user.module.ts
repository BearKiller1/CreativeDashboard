import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [DashboardComponent, UserprofileComponent, TablelistComponent, TypographyComponent, IconsComponent, MapsComponent, NotificationsComponent, UpgradeComponent, ContentComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
