import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-field-radio-group',
  templateUrl: './field-radio-group.component.html',
  styleUrls: ['./field-radio-group.component.css']
})
export class FieldRadioGroupComponent implements OnInit {

  @Input() group: string;
  @Input() value: string;
  @Input() isChecked: boolean;
  @Input() isDisabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
