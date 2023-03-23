import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFormDialogComponent } from './album-form-dialog.component';

describe('AlbumFormDialogComponent', () => {
  let component: AlbumFormDialogComponent;
  let fixture: ComponentFixture<AlbumFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
