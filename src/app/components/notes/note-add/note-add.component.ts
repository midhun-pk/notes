import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

  addNoteIsFocused: boolean;

  constructor() { }

  ngOnInit() {
  }

  onAddNoteFocus() {
    this.addNoteIsFocused = true;
  }

  onCloseClick() {
    this.addNoteIsFocused = false;
  }

  onAddNoteClick() {
    this.addNoteIsFocused = false;
  }
}
