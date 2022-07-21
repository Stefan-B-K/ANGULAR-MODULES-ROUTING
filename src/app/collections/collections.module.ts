import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from "../shared/shared.module";
import { TabBiographyComponent } from './tab-biography/tab-biography.component';
import { TabCompaniesComponent } from './tab-companies/tab-companies.component';
import { TabPartnersComponent } from './tab-partners/tab-partners.component';


@NgModule({
    declarations: [
        CollectionsHomeComponent,
        TableComponent,
        TabBiographyComponent,
        TabCompaniesComponent,
        TabPartnersComponent
    ],
    imports: [
        CommonModule,
        CollectionsRoutingModule,
        SharedModule
    ]
})
export class CollectionsModule { }
