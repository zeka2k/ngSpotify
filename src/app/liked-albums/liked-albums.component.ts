import { Component, OnInit } from '@angular/core';
import { Artist } from '../core/services/artist';
import { GetDataService } from '../core/services/getData.service';

@Component({
  selector: 'ngSpotify-liked-albums',
  templateUrl: './liked-albums.component.html',
  styleUrls: ['./liked-albums.component.scss'],
})
export class LikedAlbumsComponent implements OnInit {
  albumList!: Artist[];
  curentAlbum!: string;

  constructor(private data: GetDataService) {}

  ngOnInit(): void {
    this.albumList = this.data.getArtists();
  }

  addFavorite(i: number, j: number) {
    this.albumList[i].albums[j].favorite =
      !this.albumList[i].albums[j].favorite;
  }
}
