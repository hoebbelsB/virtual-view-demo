import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatAnchor, RouterLinkActive, RouterLink],
  template: `
    <div class="navigation">
      <a
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        mat-button
        [routerLink]="['']"
      >
        Blank
      </a>
      <a mat-button routerLinkActive="active" [routerLink]="['initial']">
        Native
      </a>
      <a [routerLink]="['virtual-scroll']" routerLinkActive="active" mat-button>
        Virtual Scrolling
      </a>
      <a [routerLink]="['css']" routerLinkActive="active" mat-button>
        CSS Virtual Scrolling
      </a>
      <a mat-button routerLinkActive="active" [routerLink]="['virtual-view']">
        Virtual View
      </a>
    </div>
    <div class="content">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {}
