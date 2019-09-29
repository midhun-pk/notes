import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: string;
  searchText: string;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.title = 'Notes';
  }

  onSubmit(form: NgForm) {
    this.searchText = form.controls.searchText.value;
    this.notesService.search(this.searchText);
  }

  clearSearch() {
    this.searchText = '';
    this.notesService.search(this.searchText);
  }
}
