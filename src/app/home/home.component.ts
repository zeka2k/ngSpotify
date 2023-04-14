import { Component, OnInit } from '@angular/core';
import { Artist } from '../core/services/artist';
import { AppState } from '../reducers';
import {select, Store} from '@ngrx/store';
import { selectAllArtists } from '../core/store/selectors/artists.selectors';
import { Observable } from 'rxjs';


@Component({
  selector: 'ngSpotify-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  albumList$!: Observable<Artist[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.albumList$ = this.store.pipe(select(selectAllArtists));
  }
}
