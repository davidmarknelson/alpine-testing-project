import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'songs', loadChildren: () => import('./pages/songs/songs.module').then(m => m.SongsModule) },
  { path: 'lyrics', loadChildren: () => import('./pages/lyrics/lyrics.module').then(m => m.LyricsModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
