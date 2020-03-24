import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SongsService } from './songs.service';
import { Song } from "./song";

const songsArray: Array<Song> = [
  {
    platform: 'relevant string',
    id: 'relevant string',
    title: 'relevant string',
    artist: 'relevant string',
    artistLink: 'relevant string',
    album: 'relevant string',
    albumLink: 'relevant string',
    isrc: 'relevant string',
    duration: 'relevant string',
    trackLink: 'relevant string',
    preview: 'relevant string',
    picture: 'relevant string',
    addedDate: 123,
    position: 'relevant string',
    shareUrls: []
  }
]

describe('SongServiceService', () => {
  let service: SongsService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(SongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSongs$', () => {
    it('should return an array of songs', () => {
      spyOn(service, 'getSongs$').and.callFake(() => {
        return of(songsArray);
      });

      let results;
      service.getSongs$().subscribe(res => results = res);

      expect(results).toEqual(songsArray);
    });
  });
});
