import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album, Song } from 'src/app/core/services/artist';
import { GetDataService } from 'src/app/core/services/getData.service';

@Component({
  selector: 'ngSpotify-album-form-dialog',
  templateUrl: './album-form-dialog.component.html',
  styleUrls: ['./album-form-dialog.component.scss'],
})
export class AlbumFormDialogComponent {
  curentArtist!: string;
  paramsSubscription!: Subscription;
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AlbumFormDialogComponent>,
    private service: GetDataService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      title: '',
      description: '',
      songs: this.fb.array([this.createSongFormGroup()]),
    });
  }

  ngOnInit() {
    
  }

  createSongFormGroup(): FormGroup {
    return this.fb.group({
      songName: ['', Validators.required],
      songLength: ['', Validators.required]
    });
  }

  get getSongs(): FormArray {
    return this.form.get('songs') as FormArray;
  }

  get getTitle(){
    return this.form.get('title')?.value;
  }

  get getDescription(){
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

    this.getSongs.controls.forEach(control => {
      songs.push(Song.fromForm(control.value))
    });

    this.dialogRef.close({ title: title, description: description, songs: songs});
  }
}
