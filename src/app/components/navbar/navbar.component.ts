import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: string;
  searchText: string;
  user: User;

  constructor(private notesService: NotesService, private authService: AuthService) { }

  ngOnInit() {
    this.title = 'Notes';
    this.user = this.authService.getUser();
  }

  onSubmit(form: NgForm) {
    this.searchText = form.controls.searchText.value;
    this.notesService.search(this.searchText);
  }

  clearSearch() {
    this.searchText = '';
    this.notesService.search(this.searchText);
  }

  onLogoutButtonClick() {
    this.authService.logout();
  }
}
