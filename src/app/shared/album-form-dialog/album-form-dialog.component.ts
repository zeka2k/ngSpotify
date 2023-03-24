import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Song } from '../../core/services/artist';

@Component({
  selector: 'ngSpotify-album-form-dialog',
  templateUrl: './album-form-dialog.component.html',
  styleUrls: ['./album-form-dialog.component.scss'],
})
export class AlbumFormDialogComponent {
  form: FormGroup;
  title = new FormControl('', [Validators.required]);
  song = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<AlbumFormDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      title: '',
      songs: [{ name: String, length: String }],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {
    //console.log(this.data.albumForm.value);
    const value = form.value;
    const newSong = new Song(value.title, value.length, false);
    this.dialogRef.close();
  }

  getErrorMessage() {
    if (this.title.hasError('required')) {
      return 'You must enter a value';
    }

    return this.title.hasError('name') ? 'Not a valid name' : '';
  }
}
