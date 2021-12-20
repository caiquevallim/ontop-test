import {Component, OnInit} from '@angular/core';
import {TableColumnSizes, TableColumnTypes, TableInterface} from '../../../core/interfaces/table.interface';
import {Status} from '../../../core/interfaces/status.interface';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  tableConfig: TableInterface;
  contracts = [{
    id: 1,
    icon: 'assets/user_a.png',
    name: 'Darlene Robertson',
    startDate: 'Mar 4, 2021',
    amount: '$200 USD',
    status: Status.active,
    type: 'Traditional',
    badge: 'badge-active',
  }, {
    id: 2,
    icon: 'assets/user_b.png',
    name: 'Darlene Robertson',
    startDate: 'Mar 4, 2021',
    amount: '$200 USD',
    status: Status.active,
    type: 'Traditional',
    badge: 'badge-active',
  }, {
    id: 3,
    icon: 'assets/user_c.png',
    name: 'Darlene Robertson',
    startDate: 'Mar 4, 2021',
    amount: '$200 USD',
    status: Status.signaturePending,
    type: 'Traditional',
    badge: 'badge-signature-pending'
  }];
  ngOnInit(): void {
    this.tableConfig = {
      data: this.contracts,
      columns: [{
        description: '',
        key: 'icon',
        type: TableColumnTypes.icon,
        icon: 'icon',
        colSize: TableColumnSizes.colMd1
      }, {
        description: 'Contractor name',
        key: 'name',
        type: TableColumnTypes.text,
        colSize: TableColumnSizes.colMd3
      }, {
        description: 'Type',
        key: 'type',
        type: TableColumnTypes.text,
        colSize: TableColumnSizes.colMd2,
      }, {
        description: 'Start date',
        key: 'startDate',
        type: TableColumnTypes.text,
        colSize: TableColumnSizes.colMd2,
      }, {
        description: 'Amount',
        key: 'amount',
        type: TableColumnTypes.text,
        colSize: TableColumnSizes.colMd1
      }, {
        description: 'Status',
        key: 'status',
        type: TableColumnTypes.badge,
        colSize: TableColumnSizes.colMd2,
      }, {
        description: 'Actions',
        key: 'action',
        type: TableColumnTypes.actions,
        colSize: TableColumnSizes.colMd1
      }]
    };
  }
}
