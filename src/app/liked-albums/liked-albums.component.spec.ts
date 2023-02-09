import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedAlbumsComponent } from './liked-albums.component';

describe('LikedAlbumsComponent', () => {
  let component: LikedAlbumsComponent;
  let fixture: ComponentFixture<LikedAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedAlbumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
