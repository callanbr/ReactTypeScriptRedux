export interface NewNoteInputProps {
  addNote(note: string): void;
}

export enum NoteActionTypes {
  add = 'ADD_NOTE',
}
export type Action = { type: NoteActionTypes; payload: string };

export interface NotesState {
  notes: string[];
}
