import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: BehaviorSubject<Note[]>;

  constructor() {
    let notes = JSON.parse(localStorage.getItem('notes'));
    if (!notes) { notes = []; }
    this.notes = new BehaviorSubject(notes as Note[]);
  }

  getNotes() {
    return this.notes;
  }

  add(note: Note) {
    let notes = this.notes.getValue();
    notes = [...notes, note];
    this.notes.next(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  delete(index: number) {
    const notes = this.notes.getValue();
    notes.splice(index, 1);
    this.notes.next([...notes]);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  update(index: number, updatedNote: Note) {
    const notes = this.notes.getValue();
    notes[index] = updatedNote;
    this.notes.next([...notes]);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  search(searchText: string) {
    searchText = searchText.trim().toLowerCase();
    if (searchText) {
      let notes = this.notes.getValue();
      notes = notes.filter(note => {
        return note.title.toLowerCase().includes(searchText) || note.description.toLowerCase().includes(searchText);
      });
      this.notes.next(notes);
    } else {
      let notes = JSON.parse(localStorage.getItem('notes'));
      if (!notes) { notes = []; }
      this.notes.next(notes as Note[]);
    }
  }
}
