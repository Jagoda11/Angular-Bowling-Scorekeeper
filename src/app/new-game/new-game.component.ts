import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.sass'],
})
export class NewGameComponent implements OnInit {
  // gives an event to the parent component
  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
