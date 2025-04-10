import { Routes } from '@angular/router';
import { BlankComponent } from './pages/blank.component';
import { InitialComponent } from './pages/initial.component';
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
    component: BlankComponent,
  },
  {
    path: 'css',
    component: BlankComponent,
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
