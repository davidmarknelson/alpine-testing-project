import { Injectable } from '@angular/core';
import { Lyrics } from './lyrics';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {
  apiUrl: string = 'https://api.lyrics.ovh/v1/';

  constructor(private http: HttpClient) { }

  getLyrics$(artist, songTitle): Observable<Lyrics> {
    return this.http.get<Lyrics>(`${this.apiUrl}${artist}/${songTitle}`);
  }
}
