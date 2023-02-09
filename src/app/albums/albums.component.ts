import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../artist';

@Component({
  selector: 'ngSpotify-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent  implements OnInit{ 

  @Input() albums: Album[] | undefined;
  

  constructor() {}

  ngOnInit(): void {}

  addFavorite(i: number) {
    if(this.albums != undefined) {
      this.albums[i].favorite = !this.albums[i].favorite;
      console.log(this.albums[i].favorite);
    }
  }
}
