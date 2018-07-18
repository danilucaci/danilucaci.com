import React from "react";

// import IconMenu from "../../../../static/icons/sass.svg";

const MenuButton = () => {
  return (
    <button className="a-menu__btn">
      <span className="copy copy--s copy--b copy--menu">Menu</span>
      <div className="a-menu__icon" aria-hidden="true">
        {/* <IconMenu className="icon icon--menu" /> */}
      </div>
    </button>
  );
};

export default MenuButton;
