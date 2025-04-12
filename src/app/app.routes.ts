import { Routes } from '@angular/router';
import { BlankComponent } from './pages/blank.component';
import { CssVirtualScrollComponent } from './pages/css-virtual-scroll.component';
import { InitialComponent } from './pages/initial.component';
import { VirtualScrollComponent } from './pages/virtual-scroll.component';
import { VirtualViewComponent } from './pages/virtual-view.component';

export const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
  },
  {
    path: 'initial',
    component: InitialComponent,
  },
  {
    path: 'virtual-scroll',
    component: VirtualScrollComponent,
  },
  {
    path: 'css',
    component: CssVirtualScrollComponent,
  },
  {
    path: 'virtual-view',
    component: VirtualViewComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
