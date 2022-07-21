import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from "../shared/shared.module";
import { TabBiographyComponent } from './tabs/tabs-biography/tab-biography.component';
import { TabCompaniesComponent } from './tabs/tabs-companies/tab-companies.component';
import { TabPartnersComponent } from './tabs/tabs-partners/tab-partners.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
    declarations: [
        CollectionsHomeComponent,
        TableComponent,
        TabBiographyComponent,
        TabCompaniesComponent,
        TabPartnersComponent,
        TabsComponent
    ],
    imports: [
        CommonModule,
        CollectionsRoutingModule,
        SharedModule
    ]
})
export class CollectionsModule { }
