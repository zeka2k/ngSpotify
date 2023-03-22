import { Component, OnInit } from '@angular/core';
import { Artist } from '../core/services/artist';
import { GetDataService } from '../core/services/getData.service';

@Component({
  selector: 'ngSpotify-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  albumList!: Artist[];

  constructor(private data: GetDataService) {}

  ngOnInit(): void {
    this.albumList = this.data.getArtists();
  }
}
