import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{path:'apply',component:HelloComponent},
{path: 'home', component:HiComponent},
{path: 'profile', component:ProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
