import React from "react";
import Link from "next/link";
// MenuItems Area
const MenuItems = (props) => {
  return (
    <>
      <li className="nav-item">
        <a href={props.item.href} className="nav-link">
          {props.item.name}
          {props.item.has_children && <i className="fas fa-angle-down"></i>}
        </a>
        {/* <Link href={props.item.href} className="nav-link">
          {props.item.name}
          {props.item.has_children && <i className="fas fa-angle-down"></i>}
        </Link> */}
        {props.item.has_children && (
          <ul className="dropdown-menu">
            {props.item.children.map((item, index) => (
              <MenuItems item={item} key={index} />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};
export default MenuItems;
