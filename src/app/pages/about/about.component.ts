import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true
})
export class AboutComponent implements OnInit { 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  handleOpenDialog = () => {
    this.dialog.open(DialogComponent, {
      width: '40rem',
      height: '20rem'
    });
  }

}
