import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-field-textbox',
  templateUrl: './field-textbox.component.html',
  styleUrls: ['./field-textbox.component.css']
})
export class FieldTextboxComponent implements OnInit {

  @Input() isDisabled;
  inputTextValue: string;

  constructor() { }

  ngOnInit() {
    this.inputTextValue = 'MyText';
    console.log('isDisabled', this.isDisabled);
  }

}
