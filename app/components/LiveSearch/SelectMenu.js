import React, { useState, useEffect } from 'react';

function SelectMenu(props) {
  function isSelected(selectedItem) {
    if (props.multiple)  return props.value.includes(selectedItem);
    return props.value === selectedItem
  }

  function handleClickItem(item) {
    props.handleClickItem && props.handleClickItem(item[props.valueField], !isSelected(item[props.valueField]));
  }

  return (
    <div class="kintoneplugin-dropdown-list">
      {
        props.options.map((item,index)=> {
          return (
            <div className="kintoneplugin-dropdown-list-item" key={index} onClick={()=> {handleClickItem(item)}}>
              <span
                className={`kintoneplugin-dropdown-list-item-name ${isSelected(item[props.valueField]) ? 'selected' : ''}`}
              >{item[props.labelField]}</span>
            </div>)
        })
      }
    </div>
  )
}
export default SelectMenu;
