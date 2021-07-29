import { NewNoteInput } from './NewNoteInput';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from '../../redux/notes/actions';
import { NotesState } from '../../redux/notes/types';

export const Notes = () => {
  const notes = useSelector<NotesState, NotesState['notes']>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
};
