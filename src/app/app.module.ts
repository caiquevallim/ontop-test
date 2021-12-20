import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NavigatorComponent} from './components/navigator/navigator.component';
import {NavItemComponent} from './components/navigator/nav-item/nav-item.component';
import {ContractsComponent} from './components/pages/contracts/contracts.component';
import {InputSearchComponent} from './core/components/input-search/input-search.component';
import {ContractTypesComponent} from './core/components/contract-types/contract-types.component';
import {StatusComponent} from './core/components/status/status.component';
import {RangeDatePickerComponent} from './core/range-date-picker/range-date-picker.component/range-date-picker.component';
import {TableComponent} from './core/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    NavItemComponent,
    ContractsComponent,
    InputSearchComponent,
    ContractTypesComponent,
    StatusComponent,
    RangeDatePickerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
