import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

import "./Select.css";

function Select({ data, placeholder, icon }) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(placeholder);
  const [listData, setListData] = useState(data)
  const [listData2, setListData2] = useState(data)
  
  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };
  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setSelectedItem(name);
    // setListData2(data) // after filtering and selecting, reset the list
    setIsOpenSelect(false);
  };

  const filterList = (e) => {
    let keyword = e.target.value.toLowerCase()
    const list = listData2.filter((item) => {
      return item.toLowerCase().includes(keyword)
    })
    const list2 = list.filter((item, i) => list.indexOf(item) === i)
    setListData(list2);
  }

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="select-drop-wrapper cursor position-relative">
        {icon}
        <div className="open-select" onClick={openSelect}>
          <span>{selectedItem.length > 14 ? selectedItem.substr(0,14)+'...' : selectedItem}</span>
          <span>
            {!isOpenSelect ? (
              <ArrowDropDownIcon className="arrow-down" />
            ) : (
              <ArrowDropUpIcon />
            )}
          </span>
        </div>
        {isOpenSelect === true && (
          <div className="select-drop">
            <div className="searchField">
              <input type="text" placeholder="search here.." onChange={filterList}/>
              <ul className="searchResults">
                <li
                  key={0}
                  onClick={() => closeSelect(0, placeholder)}
                  className={`${selectedIndex === 0 ? "active" : ""}`}
                >
                  {placeholder}
                </li>
                {listData.map((item, index) => {
                  return (
                    <li
                      key={index+1}
                      onClick={() => closeSelect(index+1, item)}
                      className={`${selectedIndex === index+1 ? "active" : ""}`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

export default Select;
