import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() isDisabled;
  @Input() text;
  @Input() type;

  constructor() { }

  ngOnInit() {
  }

}
