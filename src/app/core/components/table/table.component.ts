import {Component, Input} from '@angular/core';
import {TableColumnTypes, TableInterface} from '../../interfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableConfig: TableInterface;
  TableColumnTypes = TableColumnTypes;
}
