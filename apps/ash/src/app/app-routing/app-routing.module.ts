import { NotfoundComponent } from './../component/pages/notfound/notfound.component';
import { IntroComponent } from './../component/pages/intro/intro.component';
import { ProfileComponent } from './../component/pages/profile/profile.component';
import { AboutComponent } from './../component/pages/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
