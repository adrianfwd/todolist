import React from "react";

export default function NoteCard(props) {
  const { children } = props;
  return (
    <li className="note_item">
      <div>
        {children}
        <i className="fa-solid fa-pen-to-square"></i>
        <br />
        <i className="fa-solid fa-trash"></i>
      </div>
    </li>
  );
}
