import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SharedModule } from "../shared/shared.module";
import { SegmentComponent } from './segment/segment.component';


@NgModule({
    declarations: [
        ElementsHomeComponent,
        PlaceholderComponent,
        SegmentComponent
    ],
    imports: [
        CommonModule,
        ElementsRoutingModule,
        SharedModule
    ]
})
export class ElementsModule { }
