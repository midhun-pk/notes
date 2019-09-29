import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

  addNoteIsFocused: boolean;
  title = '';
  description = '';

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  onAddNoteFocus() {
    this.addNoteIsFocused = true;
  }

  onCloseClick() {
    this.addNoteIsFocused = false;
  }

  onAddNoteClick() {
    if (this.description.trim().length !== 0 && this.title.trim().length !== 0) {
      this.addNoteIsFocused = false;
      const note = new Note();
      note.title = this.title;
      note.description = this.description;
      this.notesService.add(note);
      this.title = this.description = '';
    }
  }
}
