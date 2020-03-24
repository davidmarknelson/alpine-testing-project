import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { LyricsComponent } from './lyrics.component';
import { LyricsModule } from './lyrics.module';
import { LyricsService } from '../../services/lyrics/lyrics.service';
import { Lyrics } from '../../services/lyrics/lyrics';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute} from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

let fixture: ComponentFixture<LyricsComponent>;
let title: DebugElement;
let artist: DebugElement;
let lyricsElem: DebugElement;
let errorMsgElem: DebugElement;

function selectElements(): void {
  title = fixture.debugElement.query(By.css('.title'));
  artist = fixture.debugElement.query(By.css('.artist'));
  lyricsElem = fixture.debugElement.query(By.css('.lyrics'));
  errorMsgElem = fixture.debugElement.query(By.css('.error-msg'));
}

const lyrics: Lyrics = {
  lyrics: 'Awesome lyrics'
}

const errorMsg: string = 'No lyrics found';

class MockActivatedRoute {
  snapshot = { params: { 
    artist: 'Artist',
    songTitle: 'Song Title'
  } };
}

class MockLyricsService {
  getLyrics$(artist, songTitle) {
    return of();
  }
}

describe('LyricsComponent', () => {
  let component: LyricsComponent;
  let lyricsService: LyricsService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        LyricsModule,
        RouterTestingModule
      ]
    })
    .overrideComponent(LyricsComponent, {
      set: {
        providers: [
          { provide: LyricsService, useClass: MockLyricsService },
          { provide: ActivatedRoute, useClass: MockActivatedRoute }
        ]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsComponent);
    component = fixture.componentInstance;
    lyricsService = fixture.debugElement.injector.get(LyricsService);
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  describe('initialization', () => {
    it('should call  the lyrics service and populate the page with the data', () => {
      spyOn(component, 'getLyrics').and.callThrough();
      spyOn(lyricsService, 'getLyrics$').and.callFake(() => of(lyrics));
      fixture.detectChanges();
      selectElements();

      // HTML element expectations
      expect(title.nativeElement.innerText).toEqual('Song Title');
      expect(artist.nativeElement.innerText).toEqual('Artist');
      expect(lyricsElem).toBeTruthy();
      expect(errorMsgElem).toBeFalsy();

      // Spy expectations
      expect(component.getLyrics).toHaveBeenCalled();
      expect(lyricsService.getLyrics$).toHaveBeenCalled();
    });
    
    it('should return an error an display the error', () => {
      spyOn(component, 'getLyrics').and.callThrough();
      spyOn(lyricsService, 'getLyrics$').and.callFake(() => throwError({error: {error: errorMsg}}));
      fixture.detectChanges();
      selectElements();

      // HTML element expectations
      expect(title).toBeFalsy();
      expect(artist).toBeFalsy();
      expect(lyricsElem).toBeFalsy();
      expect(errorMsgElem.nativeElement.innerText).toEqual('No lyrics found');

      // Spy expectations
      expect(component.getLyrics).toHaveBeenCalled();
      expect(lyricsService.getLyrics$).toHaveBeenCalled();
    });
  });
});
