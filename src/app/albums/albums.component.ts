import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album, Artist } from '../services/artist';
import { GetDataService } from '../services/getData.service';

@Component({
  selector: 'ngSpotify-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent  implements OnInit, OnDestroy{ 
  curentArtist!: string;
  albums!: Album[];
  paramsSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private data: GetDataService) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.curentArtist = params['name'];
          this.albums = this.data.getAlbums(this.curentArtist);
        }
      );
  }

  addFavorite(i: number) {
    if(this.albums != undefined) {
      this.albums[i].favorite = !this.albums[i].favorite;
      console.log(this.albums[i].favorite);
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
