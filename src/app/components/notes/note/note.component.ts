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

}
