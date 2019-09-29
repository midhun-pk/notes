import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotesComponent } from './components/notes/notes.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: 'home', canActivate: [AuthGuard], component: HomeComponent,
    children: [
      { path: '', component: NotesComponent }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
