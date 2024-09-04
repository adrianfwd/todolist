import React from "react";

export default function TodoCard(props) {
    const {children} = props
  return (
    <li className="todoItem">

      <div>
        {children}
        <i class="fa-solid fa-pen-to-square"></i>
        <br />
        <i class="fa-solid fa-trash"></i>
      </div>

    </li>
  );
}
