import { Action, NoteActionTypes } from './types';

export const addNote = (note: string): Action => ({
  type: NoteActionTypes.add,
  payload: note,
});
