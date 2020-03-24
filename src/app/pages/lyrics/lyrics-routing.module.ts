import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LyricsComponent } from './lyrics.component';

const routes: Routes = [
  { path: ':artist/:songTitle', component: LyricsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LyricsRoutingModule { }
