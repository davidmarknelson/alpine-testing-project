import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LyricsService } from '../../services/lyrics/lyrics.service';
import { Lyrics } from '../../services/lyrics/lyrics';
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  lyrics: Lyrics;
  artist: string;
  songTitle: string;
  errorMsg: string;
  loading: boolean = true;

  constructor(
    private lyricsService: LyricsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.artist = this.route.snapshot.params['artist'];
    this.songTitle = this.route.snapshot.params['songTitle'];
    this.getLyrics(this.artist, this.songTitle);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getLyrics(artist, songTitle): void {
    this.lyricsService.getLyrics$(artist, songTitle).pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe(res => {
      this.lyrics = res;
      this.loading = false;
    }, err => {
      this.errorMsg = err.error.error;
      this.loading = false;
    });
  }
}
