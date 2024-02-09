import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  UIShellModule,
  IconModule,
  GridModule,
  BreadcrumbModule,
  ButtonModule,
  ToggleModule,

  TabsModule,
  ThemeModule,

  TableModule,
  DialogModule,
  CheckboxModule,
  PaginationModule,
  ModalModule,
  InputModule,
  DropdownModule,
} from 'carbon-components-angular';


export const CarbonModules = [
  UIShellModule,
  IconModule,
  GridModule,
  BreadcrumbModule,
  InputModule,
  TabsModule,
  ThemeModule,
  ToggleModule,
  ButtonModule,
  DropdownModule,
  PaginationModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...CarbonModules,
    TableModule,
    DialogModule,
    CheckboxModule,
    ButtonModule,
    PaginationModule,
    ModalModule,
    InputModule,
    DropdownModule,
  ],
  exports: [
    ...CarbonModules,
    TableModule,
    DialogModule,
    CheckboxModule,
    ButtonModule,
    PaginationModule,
    ModalModule,
    InputModule,
    DropdownModule,
  ],
})
export class SharedModule {
}
