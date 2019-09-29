import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[];

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(notes => this.notes = notes);
  }

}
