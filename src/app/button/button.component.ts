import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() onButtonPress = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onPress() {
    this.onButtonPress.emit(true);
  }
}
