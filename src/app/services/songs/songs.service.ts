import { Injectable } from '@angular/core';
import { Song } from './song';
import { Observable, of } from 'rxjs';
import { songs } from '../../songs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor() { }

  getSongs$(): Observable<Array<Song>> {
    return of(songs.SONGS_LIST);
  }
}
