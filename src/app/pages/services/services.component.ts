import { Component, OnInit } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';

type ServiceItem = {
  img: string,
  title: string,
  txt: string
}

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    standalone: true,
    imports: [NgFor, NgStyle]
})
export class ServicesComponent implements OnInit {

  serviceList!: ServiceItem[];
    

  constructor() { }

  ngOnInit(): void {
    this.serviceList = [
      {
        img: './assets/SatelliteIcon.png',
        title: 'Calculated Weather',
        txt: "Built Wicket longeradmire do barton vanity itself do in it"
      },
      {
        img: './assets/FlightIcon.png',
        title: 'Best Flights',
        txt: "Engrossed listening. Park gate sell they west hard for the."
      },
      {
        img: './assets/VocalIcon.png',
        title: 'Local Events',
        txt: 'Barton vanity itself do in it. Preferd to men it engrossed listening.'
      },
      {
        img: './assets/CustomizationIcon.png',
        title: 'Calculated',
        txt: 'We deliver outsourced aviation services for military customers'
      }
  ] 
      
    
  }

}
