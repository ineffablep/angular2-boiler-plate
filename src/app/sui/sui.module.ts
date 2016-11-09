import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from './sui.navigation/sui.navigation.component';
import { RatingComponent } from './sui.rating/sui.rating.component';
import { TableComponent } from './sui.table/sui.table.component';
import { FilterPipe } from './sui.util/sui.util.filter.pipe';
import { OrderByPipe } from './sui.util/sui.util.orderBy.pipe';


@NgModule({
    declarations: [FilterPipe,OrderByPipe, NavigationComponent, RatingComponent , TableComponent],
    imports: [CommonModule, RouterModule, FormsModule],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        FilterPipe,
        OrderByPipe,
        TableComponent,
        NavigationComponent,
        RatingComponent
    ]
})
export class SuiModule { }
