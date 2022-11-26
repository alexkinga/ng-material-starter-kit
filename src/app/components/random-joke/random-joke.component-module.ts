import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RandomJokeComponent } from './random-joke.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [RandomJokeComponent],
  providers: [],
  exports: [RandomJokeComponent]
})
export class RandomJokeComponentModule {
}
