import { Component } from '@angular/core';
import {ContractInterface} from '../../interfaces/contract.interface';

@Component({
  selector: 'app-contract-types',
  templateUrl: './contract-types.component.html',
  styleUrls: ['./contract-types.component.scss']
})
export class ContractTypesComponent {
  contractorList: ContractInterface[] = [{
    id: 1,
    name: 'Traditional',
  }, {
    id: 2,
    name: 'Freelancer'
  }];
}
