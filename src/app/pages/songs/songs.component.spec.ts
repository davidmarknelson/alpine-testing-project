import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsComponent } from './songs.component';
import { SongsModule } from './songs.module';
import { SongsService } from '../../services/songs/songs.service';
import { of } from 'rxjs';

class MockSongsService {
  getSongs$() {
    return of();
  }
}

describe('SongsComponent', () => {
  let component: SongsComponent;
  let fixture: ComponentFixture<SongsComponent>;
  let songsService: SongsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        SongsModule
      ]
    })
    .overrideComponent(SongsComponent, {
      set: {
        providers: [
          { provide: SongsService, useClass: MockSongsService },
        ]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsComponent);
    component = fixture.componentInstance;
    songsService = fixture.debugElement.injector.get(SongsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
