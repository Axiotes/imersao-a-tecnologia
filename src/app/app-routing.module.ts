import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrailComponent } from './pages/trail/trail.component';
import { LibraryComponent } from './pages/library/library.component';
import { ContentComponent } from './pages/content/content.component';
import { AllInfosComponent } from './pages/all-infos/all-infos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'trail',
    component: TrailComponent,
    children: [
      { path: 'library', component: LibraryComponent },
      {
        path: ':slug',
        component: ContentComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'library' },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
