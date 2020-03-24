import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LyricsService } from './lyrics.service';
import { Lyrics } from "./lyrics";

const lyrics: Lyrics = {
  lyrics: 'Awesome lyrics'
}

describe('LyricsService', () => {
  let lyricsService: LyricsService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule  
      ],
      providers: [LyricsService]
    });
    
    http = TestBed.get(HttpTestingController);
    lyricsService = TestBed.get(LyricsService);
  });

  it('should be created', () => {
    expect(lyricsService).toBeTruthy();
  });

  describe('getLyrics$', () => {
    it('should return song lyrics', () => {
      let response: any;
      lyricsService.getLyrics$('artist', 'songTitle').subscribe(res => {
        response = res;
      });

      http.expectOne('https://api.lyrics.ovh/v1/artist/songTitle').flush(lyrics);
      expect(response).toEqual(lyrics);
      http.verify();
    });

    it('should return an error when there are no lyrics', () => {
      const errorMsg: string = 'No lyrics found';

      let errorResponse: any;

      lyricsService.getLyrics$('artist', 'songTitle').subscribe(res => {}, err => {
        errorResponse = err;
      });

      http.expectOne('https://api.lyrics.ovh/v1/artist/songTitle')
        .flush({error: errorMsg}, {status: 404, statusText: 'Not Found'});
      expect(errorResponse.error.error).toEqual(errorMsg);
      http.verify();
    });
  });
});
