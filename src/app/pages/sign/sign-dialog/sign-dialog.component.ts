import { Component, OnInit } from '@angular/core';
import { MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
    selector: 'app-sign-dialog',
    templateUrl: './sign-dialog.component.html',
    styleUrls: ['./sign-dialog.component.scss'],
    standalone: true,
    imports: [MatDialogTitle, MatDialogActions, MatDialogClose]
})
export class SignDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
