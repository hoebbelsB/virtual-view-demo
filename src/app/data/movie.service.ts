import { Injectable, signal } from '@angular/core';
import { MovieModel } from './movie.model';

import data from './data.json';

@Injectable({ providedIn: 'root' })
export class MovieService {
  movies = signal<MovieModel[]>(data.movies);
}
