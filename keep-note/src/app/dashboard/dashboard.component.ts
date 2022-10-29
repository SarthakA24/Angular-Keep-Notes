import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NOTES } from '../model/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  noteDetails: Note[] = NOTES;
  searchText: string = "";

  searchNote() {
    if (this.searchText != "" || this.searchText != null || this.searchText != undefined) {
      this.noteDetails = NOTES.filter(note => note.title?.startsWith(this.searchText));
    } else {
      this.noteDetails = NOTES;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
