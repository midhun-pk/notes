import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Input() index: number;

  editing: boolean;
  title = '';
  description = '';

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  onDoneButtonClick() {
    this.note.completed = !this.note.completed;
    this.notesService.update(this.index, this.note);
  }

  onDeleteButtonClick() {
    this.notesService.delete(this.index);
  }

  onEditButtonClick() {
    this.editing = true;
    this.description = this.note.description;
    this.title = this.note.title;
  }

  onSaveButtonClick() {
    if (this.description.trim().length !== 0 && this.title.trim().length !== 0) {
      this.editing = false;
      this.note.title = this.title;
      this.note.description = this.description;
      this.notesService.update(this.index, this.note);
      this.title = this.description = '';
    }
  }

  autoTextAreaHeight(element: HTMLElement) {
    element.style.height = 'auto'; // Height should decrease when backspace is pressed
    element.style.height = (element.scrollHeight > 30 ? element.scrollHeight : 30) + 'px';
  }

}
