import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.scss'],
    standalone: true,
    imports: [NgStyle]
})
export class DestinationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
