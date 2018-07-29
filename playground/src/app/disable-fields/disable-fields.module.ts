import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldGroupComponent } from './field-group/field-group.component';
import { FieldTextboxComponent } from './field-textbox/field-textbox.component';
import { FieldRadioGroupComponent } from './field-radio-group/field-radio-group.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FieldGroupComponent, FieldTextboxComponent, FieldRadioGroupComponent, ButtonComponent],
  exports: [FieldGroupComponent]
})
export class DisableFieldsModule { }
