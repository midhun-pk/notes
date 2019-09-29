import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotesComponent } from './components/notes/notes.component';
import {
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NoteComponent } from './components/notes/note/note.component';
import { NoteAddComponent } from './components/notes/note-add/note-add.component';
import { UsersModule } from './components/users/users.module';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesComponent,
    HomeComponent,
    NoteComponent,
    NoteAddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    UsersModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
