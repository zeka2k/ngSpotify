import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'ngSpotify-album-form-dialog',
  templateUrl: './album-form-dialog.component.html',
  styleUrls: ['./album-form-dialog.component.scss']
})
export class AlbumFormDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AlbumFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { albumForm: FormGroup }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.data.albumForm.value);
    this.dialogRef.close();
  }
}
