import React, { useState } from "react";

export default function NoteInput({ handle_add_note }) {
  const [note_value, set_note_value] = useState("");

  const handle_change = (e) => {
    set_note_value(e.target.value);
  };

  const handle_submit = (e) => {
    e.preventDefault();
    if (note_value.trim()) {
      handle_add_note(note_value);
      set_note_value(""); // Limpia el campo de entrada
    }
  };

  return (
    <form onSubmit={handle_submit}>
      <input
        type="text"
        value={note_value}
        onChange={handle_change}
        placeholder="Ingrese una nueva nota"
      />
      <button type="submit">Agregar Nota</button>
    </form>
  );
}


