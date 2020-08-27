import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-previous-scores',
  templateUrl: './previous-scores.component.html',
  styleUrls: ['./previous-scores.component.sass'],
})
export class PreviousScoresComponent implements OnInit {
  // getting something from the parent component
  @Input() allScores; //metadata @

  constructor() {}

  ngOnInit(): void {}
}
