import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../artist';

import albuns from 'src/app/ file/albuns.json';

@Component({
  selector: 'ngSpotify-liked-albums',
  templateUrl: './liked-albums.component.html',
  styleUrls: ['./liked-albums.component.scss']
})
export class LikedAlbumsComponent implements OnInit{
  @Input() albumList: Artist[] | undefined = albuns;

  constructor() {}

  ngOnInit(): void {}

  addFavorite(i: number, j: number) {
    if(this.albumList != undefined) {
      this.albumList[i].albums[j].favorite = !this.albumList[i].albums[j].favorite;
    }
  }
}
