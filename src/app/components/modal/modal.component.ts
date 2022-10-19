import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUserData } from '../../shared/models/dataUser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  message: string = ""
  cancelButtonText = "Cancel"
  userData = {
    gender: '',
    name: {
      title: '',
      first: '',
      last: '',
    },
    email: '',
    dob: {
        date: '',
        age: 0,
    },
    cell: '',
    picture: {
        thumbnail: ''
    },
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ModalComponent>) {
    if (data) {
        console.log(data)
        this.userData = data.userData;
    //   this.message = data.message || this.message;
    //   if (data.buttonText) {
    //     this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
    //   }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}