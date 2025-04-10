import { UpperCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

import { MovieModel } from '../data/movie.model';

@Component({
  selector: 'movie-card',
  imports: [UpperCasePipe],
  template: `
    <div class="movie-card">
      <img
        class="movie-image"
        [alt]="movie().title"
        [height]="300"
        [width]="200"
        [src]="image()"
      />
      <div class="movie-card-content">
        <div class="movie-card-title">{{ movie().title | uppercase }}</div>
      </div>
    </div>

    @for (item of workItems(); track $index) {
      <div></div>
    }
  `,
})
export class MovieCardComponent {
  movie = input.required<MovieModel>();

  image = computed(
    () => `https://image.tmdb.org/t/p/w342${this.movie().poster_path}`,
  );

  work = input(250);

  workItems = computed(() => new Array(this.work()).fill(null));
}
