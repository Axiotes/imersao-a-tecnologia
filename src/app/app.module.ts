import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TrailComponent } from './pages/trail/trail.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LibraryComponent } from './pages/library/library.component';
import { CardAreasComponent } from './components/card-areas/card-areas.component';
import { ContentComponent } from './pages/content/content.component';
import { CardTechnologiesComponent } from './components/card-technologies/card-technologies.component';
import { InfosComponent } from './components/infos/infos.component';
import { HeaderContentComponent } from './components/header-content/header-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrailComponent,
    LibraryComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonComponent,
    HeaderComponent,
    CarouselComponent,
    NavigationComponent,
    RouterOutlet,
    RouterLink,
    CardAreasComponent,
    CardTechnologiesComponent,
    InfosComponent,
    HeaderContentComponent
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
