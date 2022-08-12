// routerConfig.ts

import { Routes } from '@angular/router';
import { NormalMovieComponent } from './components/normal-movie/normal-movie.component';
import { NormalViewComponent } from './components/normal-view/normal-view.component';

const appRoutes: Routes = [
  { path: 'search', 
    component: NormalMovieComponent 
  },
  {
    path: 'normal',
    component: NormalViewComponent 
  }
];
export default appRoutes;