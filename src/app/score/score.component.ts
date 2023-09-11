import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  scoreCalculator(scores: any[]) {
    let result = 0
    debugger
    scores.forEach(score => {
      score = score<0?0:score;
      result = result + score
    });
    return result;
  }
}
