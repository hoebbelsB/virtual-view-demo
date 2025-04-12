import { UpperCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

import { MovieModel } from '../data/movie.model';

@Component({
  selector: 'movie-card',
  imports: [UpperCasePipe],
  template: `
    <div class="movie-card" (mouseenter)="enter()" (mouseleave)="leave()">
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
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class MovieCardComponent {
  movie = input.required<MovieModel>();

  aLargeObject = new Array(100000).fill('some-string');

  image = computed(
    () => `https://image.tmdb.org/t/p/w342${this.movie().poster_path}`,
  );

  work = input(250);

  workItems = computed(() => new Array(this.work()).fill(null));

  enter() {}

  leave() {}
}
