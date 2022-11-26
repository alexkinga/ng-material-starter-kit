import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomJokeModel } from '../models/random-joke.model';

@Injectable()
export class RandomJokeService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(): Observable<RandomJokeModel> {
    return this._httpClient.get<RandomJokeModel>('https://official-joke-api.appspot.com/random_joke');
  }
}
