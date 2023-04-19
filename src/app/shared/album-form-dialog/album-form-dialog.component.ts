import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album, Song } from 'src/app/core/services/artist';
import { GetDataService } from 'src/app/core/services/getData.service';
import { v4 as uuid } from 'uuid';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { albumUpdated } from 'src/app/core/store/actions/albums.actions';

@Component({
  selector: 'ngSpotify-album-form-dialog',
  templateUrl: './album-form-dialog.component.html',
  styleUrls: ['./album-form-dialog.component.scss'],
})
export class AlbumFormDialogComponent {
  curentArtist!: string;
  paramsSubscription!: Subscription;
  form: FormGroup;
  album!: Album;

  constructor(
    public dialogRef: MatDialogRef<AlbumFormDialogComponent>,
    private fb: FormBuilder,
    private store$: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: Album
  ) {
    if (data) {
      this.form = this.fb.group({
        title: data.title,
        description: data.description,
        songs: this.fb.array([]),
      });

      data.songs.forEach((song) => {
        const songFormGroup = this.editSongFormGroup(song);
        (this.form.get('songs') as FormArray).push(songFormGroup);
      });
    } else {
      this.form = this.fb.group({
        title: '',
        description: '',
        songs: this.fb.array([this.createSongFormGroup()]),
        //id: uuid(),
      });
    }
  }

  ngOnInit() {}

  createSongFormGroup(): FormGroup {
    return this.fb.group({
      songName: ['', Validators.required],
      songLength: [
        '',
        [Validators.required, Validators.pattern('^[0-5]?[0-9]:[0-5][0-9]$')],
      ],//criar id
    });
  }

  editSongFormGroup(data: Song): FormGroup {
    return this.fb.group({
      songName: [data.title, Validators.required],
      songLength: [
        data.length,
        [Validators.required, Validators.pattern('^[0-5]?[0-9]:[0-5][0-9]$')],
      ],//atualizar id
    });
  }

  get getSongs(): FormArray {
    return this.form.get('songs') as FormArray;
  }

  get getTitle() {
    return this.form.get('title')?.value;
  }

  get getDescription() {
    return this.form.get('description')?.value;
  }

  addSong(): void {
    this.getSongs.push(this.createSongFormGroup());
  }

  removeSong(index: number): void {
    this.getSongs.removeAt(index);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const songs: Song[] = [];
    const title = this.getTitle;
    const description = this.getDescription;
    let albumId = '';

    if (this.data) {
      albumId = this.data.id;
    } else {
      albumId = uuid();
    }


    this.getSongs.controls.forEach((control) => {
      //validacao se song ja exist ou nao
      //se nao
      songs.push(Song.fromForm(control.value, this.data.id));
      //se sim
      this.data.songs.find(control.value['id']);//fazer arrow function dentro do find
    });

    const album: Album = {
      ...this.album,
      ...this.form.value,
    };

    //console.log(this.data.id);
    const update: Update<Album> = {
      id: this.data.id,
      changes: album
    };

    this.store$.dispatch(albumUpdated({ update }));
    this.dialogRef.close({});
  }
}
