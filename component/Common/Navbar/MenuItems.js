import React from "react";
import Link from "next/link";
// MenuItems Area
const MenuItems = (props) => {
  return (
    <>
      <li className="nav-item">
        <Link href={props.item.href} className="nav-link">
          <div className="header-lis">
            {props.item.name}
            {props.item.has_children && <i className="fas fa-angle-down"></i>}
          </div>
        </Link>

        {props.item.has_children && (
          <ul
            className="dropdown-menu"
            style={{ top: "35px", padding: "15px", lineHeight: "40px" }}
          >
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
