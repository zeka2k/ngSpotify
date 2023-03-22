import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngSpotify-new-album-form',
  templateUrl: './new-album-form.component.html',
  styleUrls: ['./new-album-form.component.scss'],
})
export class NewAlbumFormComponent {
  constructor(
    public dialogRef: MatDialogRef<NewAlbumFormComponent>,
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
// apos ter o formulario submetido com o novo album ( nome do album e respetivas musicas ) criar uma funcao no servico que da push deste novo album nos album do artista
// o atribudo favorite nao deve ser escolhido pelo user deve sim ser inicializado a false
