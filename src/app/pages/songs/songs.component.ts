import { Component, OnInit } from '@angular/core';
import { Song } from '../../services/songs/song';
import { SongsService } from '../../services/songs/songs.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs$: Observable<Array<Song>> = this.songsService.getSongs$();

  constructor(private songsService: SongsService) { }

  ngOnInit() {
  }

}
