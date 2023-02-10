import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../artist';

import albuns from 'src/app/ file/albuns.json';
import { PostService } from '../services/post.service';

@Component({
  selector: 'ngSpotify-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() albumList: Artist[] | undefined = albuns;

  //constructor(private postService: PostService) {}
  constructor() {}

  ngOnInit(): void {
    // let data = this.albumList;
    // this.postService.postData(data).subscribe((response) => {
    //   console.log(response);
    // });
  }

  addFavorite(i: number) {
    if (this.albumList != undefined) {
      this.albumList[0].albums[i].favorite =
        !this.albumList[0].albums[i].favorite;
    }
  }
}
