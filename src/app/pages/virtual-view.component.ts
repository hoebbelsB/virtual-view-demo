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
    <div class="movie-list" rxVirtualViewObserver [root]="null">
      @for (movie of movies(); track movie.id) {
        <div rxVirtualView>
          <movie-card *rxVirtualViewContent [movie]="movie" />
          <div
            class="movie-card"
            [style.height]="'var(--rx-vw-h)'"
            [style.width]="'var(--rx-vw-w)'"
            *rxVirtualViewPlaceholder
          >
            <div class="movie-card-img-placeholder"></div>
            <div class="movie-card-content">
              <div class="movie-card-title">
                {{ movie.title }}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MovieCardComponent,
    RxVirtualViewObserver,
    RxVirtualView,
    RxVirtualViewContent,
    RxVirtualViewPlaceholder,
  ],
  standalone: true,
})
export class VirtualViewComponent {
  movies = inject(MovieService).movies;
}
