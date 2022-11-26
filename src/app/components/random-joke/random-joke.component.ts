import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomJokeModel } from '../../models/random-joke.model';
import { RandomJokeService } from '../../services/random-joke.service';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomJokeComponent {
  readonly data$: Observable<RandomJokeModel> = this._randomJokeService.getOne();

  constructor(private _randomJokeService: RandomJokeService) {
  }
}
