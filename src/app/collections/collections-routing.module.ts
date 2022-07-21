import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from "./collections-home/collections-home.component";
import { TabBiographyComponent } from "./tab-biography/tab-biography.component";
import { TabCompaniesComponent } from "./tab-companies/tab-companies.component";
import { TabPartnersComponent } from "./tab-partners/tab-partners.component";
import { CollectionsTabs } from "../Pages";

const routes: Routes = [
    {
        path: '',
        component: CollectionsHomeComponent,
        children: [
            { path: CollectionsTabs.biography, component: TabBiographyComponent },
            { path: CollectionsTabs.companies, component: TabCompaniesComponent },
            { path: CollectionsTabs.partners, component: TabPartnersComponent }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CollectionsRoutingModule {}
