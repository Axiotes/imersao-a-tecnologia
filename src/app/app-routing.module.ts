import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrailComponent } from './pages/trail/trail.component';
import { LibraryComponent } from './pages/library/library.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'trail', 
    component: TrailComponent,
    children: [
      { path: 'library', component: LibraryComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
