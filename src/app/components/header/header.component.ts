import { Component, OnInit } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

type MenuItem = {
  name: string,
  url?: string,
  class?: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [RouterLink, NgFor, NgClass]
})
export class HeaderComponent implements OnInit {
  menuList: MenuItem[] = [
    {
    name: 'Services',
    url: '/services'
    },
    {
    name: 'Destinations',
    url: '/destinations'
    },
    {
    name: 'Bookings',
    url: '/bookings'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Login',
      url: '/login'
    },
    {
      name: 'Sign Up',
      url: '/signup',
      class: 'sign_up_styles'
    },
    {
      name: 'EN',
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}