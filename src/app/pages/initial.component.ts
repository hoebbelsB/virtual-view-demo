import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  RxVirtualView,
  RxVirtualViewContent,
  RxVirtualViewObserver,
  RxVirtualViewPlaceholder,
} from '@rx-angular/template/virtual-view';
import { MovieService } from '../data/movie.service';
import { MovieCardComponent } from '../ui/movie-card.component';

@Component({
  selector: 'virtual-view',
  template: `
    <div class="movie-list">
      @for (movie of movies(); track movie.id) {
        <movie-card [movie]="movie" />
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MovieCardComponent],
  standalone: true,
})
export class InitialComponent {
  movies = inject(MovieService).movies;
}
