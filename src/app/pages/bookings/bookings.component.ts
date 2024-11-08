import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss'],
    standalone: true,
    imports: [NgStyle]
})
export class BookingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
