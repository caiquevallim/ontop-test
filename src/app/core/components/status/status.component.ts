import {Component} from '@angular/core';
import {Status, StatusInterface} from '../../interfaces/status.interface';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  statusList: StatusInterface[] = [{
    id: Status.active,
    label: 'Active'
  }, {
    id: Status.signaturePending,
    label: 'Signature pending'
  }];
}
