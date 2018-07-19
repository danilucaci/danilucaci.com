import React from "react";

const MenuButton = () => {
  return (
    <button className="a-menu__btn">
      <span className="copy copy--s copy--b copy--menu">Menu</span>
      <div className="a-menu__icon" aria-hidden="true">
        <img src="../../../static/icons/down.svg" alt="" />
      </div>
    </button>
  );
};

export default MenuButton;
