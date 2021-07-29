import { ChangeEvent, useState } from 'react';
import { NewNoteInputProps } from '../../redux/notes/types';

export const NewNoteInput = ({ addNote }: NewNoteInputProps) => {
  const [note, setNote] = useState('');

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote('');
  };

  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};
