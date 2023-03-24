import { Component, Inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetDataService } from 'src/app/core/services/getData.service';
import { Album, Song } from '../../core/services/artist';

@Component({
  selector: 'ngSpotify-album-form-dialog',
  templateUrl: './album-form-dialog.component.html',
  styleUrls: ['./album-form-dialog.component.scss'],
})
export class AlbumFormDialogComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AlbumFormDialogComponent>,
    private service: GetDataService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      title: '',
      description: '',
      songs: this.fb.array([this.createSongFormGroup()]),
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  createSongFormGroup(): FormGroup { // Control ou Group?? se for control retorna com um null e group nao
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.form.value);
    // this.getSongs.value;
    // this.getTitle;
    this.dialogRef.close();
  }
}
