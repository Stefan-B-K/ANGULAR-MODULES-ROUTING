import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { Pages } from "./Pages";

const routes: Routes = [
    {
        path: Pages.elements,
        loadChildren: () => import('./elements/elements.module')
            .then(m => m.ElementsModule )
    },
    {
        path: Pages.collections,
        loadChildren: () => import('./collections/collections.module')
            .then(m => m.CollectionsModule )
    },
    {
        path: Pages.views,
        loadChildren: () => import('./views/views.module')
            .then(m => m.ViewsModule )
    },
    {
        path: Pages.mods,
        loadChildren: () => import('./mods/mods.module')
            .then(m => m.ModsModule )
    },
    { path: '', component: AppComponent },
    { path: '**', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
