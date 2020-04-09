import { Injectable } from "@angular/core";
import { Observable , of} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})

export class NoteService {
  private notes: Note[];
  constructor() {
    this.notes = [{ title: 'Basic App', content: 'This will be triggered' },

    ];
  }

  getNotes(): Observable<Note[]> {
    return Observable.of(this.notes);
  }
}