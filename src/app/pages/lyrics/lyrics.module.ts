import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LyricsRoutingModule } from './lyrics-routing.module';
import { LyricsComponent } from './lyrics.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [LyricsComponent],
  imports: [
    CommonModule,
    LyricsRoutingModule,
    MaterialModule
  ]
})
export class LyricsModule { }
