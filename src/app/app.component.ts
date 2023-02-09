import { Component, OnInit } from '@angular/core';
import albuns from './ file/albuns.json';

@Component({
  selector: 'ngSpotify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngSpotify';
  
  constructor() {}

  ngOnInit(): void {}
}
