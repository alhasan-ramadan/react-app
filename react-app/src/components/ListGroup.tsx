import { MouseEvent, useState } from "react";

function ListGroup() {
  const title = <h1>Alhasan Ramadan</h1>;

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  const items = [
    "New item",
    "Another item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  let selectedIndex = 0;
  // Hook
  useState;

  return (
    <>
      {title}
      {items.length === 0 && "Nos items"}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className={
              selectedIndex === items.indexOf(item)
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
