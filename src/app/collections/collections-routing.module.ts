import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from "./collections-home/collections-home.component";
import { TabBiographyComponent } from "./tabs/tabs-biography/tab-biography.component";
import { TabCompaniesComponent } from "./tabs/tabs-companies/tab-companies.component";
import { TabPartnersComponent } from "./tabs/tabs-partners/tab-partners.component";
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
