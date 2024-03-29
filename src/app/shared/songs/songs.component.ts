import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Song } from '../../core/services/artist';
import { GetDataService } from '../../core/services/getData.service';

@Component({
  selector: 'ngSpotify-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit, OnChanges{
  @Input() curentAlbum!: string;
  @Input() songs!: Song[];

  totalSongs: number = 0;
  totalTime: number = 0;
  minutes = 0;
  seconds = 0;
  paramsSubscription!: Subscription;
  albumSongs!: Song[];

  constructor(private data: GetDataService) {}

  ngOnInit(): void {
    //select para todos as musicas de um dado album

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  
    if(changes['songs'] && changes['songs'].currentValue) {
      for (let i = 0; i < this.songs?.length; i++) {
        let parts = this.songs[i].length
          .split(':')
          .map((x) => parseInt(x, 10));
        this.totalTime += parts[0] * 60 + parts[1];
      }
      this.totalSongs = this.songs.length;
      this.minutes = Math.floor(this.totalTime / 60);
      this.seconds = this.totalTime % 60;
    }
  }
}
