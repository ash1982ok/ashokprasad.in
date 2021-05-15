import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { IntroComponent } from './component/pages/intro/intro.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './component/pages/about/about.component';
import { ProfileComponent } from './component/pages/profile/profile.component';
import { NotfoundComponent } from './component/pages/notfound/notfound.component';
import { ProjectListComponent } from './component/pages/profile/project-list/project-list.component';
import { ProjectCardComponent } from './component/pages/profile/project-card/project-card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, IntroComponent, AboutComponent, ProfileComponent, NotfoundComponent, ProjectListComponent, ProjectCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
