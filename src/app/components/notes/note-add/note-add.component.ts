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
  imageSources = [];

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  onAddNoteFocus() {
    this.addNoteIsFocused = true;
  }

  onCloseClick() {
    this.addNoteIsFocused = false;
    this.imageSources = [];
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

  autoTextAreaHeight(element: HTMLElement) {
    element.style.height = 'auto'; // Height should decrease when backspace is pressed
    element.style.height = (element.scrollHeight > 30 ? element.scrollHeight : 30) + 'px';
  }

  onFileChanged(event) {
    const files = event.target.files;
    Object.keys(files).forEach(key => {
      const file = files[key];
      const reader = new FileReader();
      reader.onload = e => this.imageSources.push(reader.result);
      reader.readAsDataURL(file);
    });
  }
}
