import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavigationComponent } from './sui.navigation/sui.navigation.component';
import { RatingComponent } from './sui.rating/sui.rating.component';
import { TableComponent } from './sui.table/sui.table.component';
import { FilterPipe } from './sui.util/sui.util.filter.pipe';
import { OrderByPipe } from './sui.util/sui.util.orderBy.pipe';
import { VisiblePipe } from './sui.util/sui.util.visible.pipe';
import { PagingPipe } from './sui.util/sui.util.paging.pipe';
import { DeletePipe } from './sui.util/sui.util.delete.pipe';

import { ModalComponent } from './sui.modal/sui.modal.component';
import { ConfirmModalComponent } from './sui.modal/sui.confirm.modal.component';
import { FormComponent } from './sui.form/sui.form.component';
import { AddPipe } from './sui.util/sui.util.add.pipe';



@NgModule({
    declarations: [
        FilterPipe,
        OrderByPipe,
        PagingPipe,
        VisiblePipe,
        DeletePipe,
        AddPipe,
        ModalComponent,
        NavigationComponent,
        RatingComponent,
        TableComponent,
        ConfirmModalComponent,
        FormComponent],
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PagingPipe,
        VisiblePipe,
        RouterModule,
        FilterPipe,
        OrderByPipe,
        DeletePipe,
        AddPipe,
        ModalComponent,
        TableComponent,
        NavigationComponent,
        RatingComponent,
        ConfirmModalComponent,
        FormComponent
    ]
})
export class SuiModule { }
