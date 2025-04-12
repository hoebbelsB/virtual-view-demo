import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AutoSizeVirtualScrollStrategy,
  RxVirtualFor,
  RxVirtualScrollViewportComponent,
} from '@rx-angular/template/experimental/virtual-scrolling';
import { MovieService } from '../data/movie.service';
import { MovieCardComponent } from '../ui/movie-card.component';

@Component({
  selector: 'css-virtual-scroll',
  template: `
    <div class="movie-list">
      @for (movie of movies(); track movie.id) {
        <movie-card [movie]="movie" />
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MovieCardComponent],
  styles: [
    `
      movie-card {
        content-visibility: auto;
        contain-intrinsic-size: auto 400px;
      }
    `,
  ],
  standalone: true,
})
export class CssVirtualScrollComponent {
  movies = inject(MovieService).movies;
}
