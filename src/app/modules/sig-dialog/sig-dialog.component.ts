import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-sig-dialog',
  templateUrl: './sig-dialog.component.html',
  styleUrls: ['./sig-dialog.component.scss']
})
export class SigDialogComponent implements OnInit {

  constructor(public mat_dialog_ref: MatDialogRef<SigDialogComponent>) { }

  ngOnInit(): void {
  }

  handleClose = () => {
    this.mat_dialog_ref.close();
  }
}
