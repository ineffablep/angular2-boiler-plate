import { TableModel, ColumnModel } from '../../sui/sui.table/sui.table.model';
import { Component } from '@angular/core';

@Component({
    templateUrl: './sample.table.component.html'
})
export class TableSampleComponent {
  getTableModel() {
      var columns = [new ColumnModel("Test","Test 1"),new ColumnModel("Test","Test 2"),new ColumnModel("Test","Test 3"),new ColumnModel("Test","Test 4")];
      return new TableModel(columns,[]);
  }
}
