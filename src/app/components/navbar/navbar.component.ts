import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: string;
  searchText: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Notes';
  }

  clearSearch() {
    this.searchText = '';
  }
}
