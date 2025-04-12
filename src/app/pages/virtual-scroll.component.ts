import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieService } from '../data/movie.service';
import { MovieCardComponent } from '../ui/movie-card.component';

@Component({
  selector: 'virtual-scroll',
  template: `
    <cdk-virtual-scroll-viewport itemSize="300" class="movie-list">
      <movie-card
        *cdkVirtualFor="let movie of movies(); trackBy: trackMovie"
        [movie]="movie"
      />
    </cdk-virtual-scroll-viewport>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MovieCardComponent,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
  ],
  standalone: true,
  styles: [
    `
      :host {
        height: 100%;
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class VirtualScrollComponent {
  movies = inject(MovieService).movies;

  trackMovie = (idx, movie) => movie.id;
}
