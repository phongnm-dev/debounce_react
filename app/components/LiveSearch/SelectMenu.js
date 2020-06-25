import React, { useState, useEffect } from 'react';

function SelectMenu(props) {
  function isSelected(itemValue) {
    if (props.multiple)  return props.valueItem.findIndex(item => item[props.valueField] === itemValue) !== -1;
    return props.valueItem ? props.valueItem[props.valueField] === itemValue : false
  }

  function handleSelect(item) {
    props.handleSelect && props.handleSelect(item);
  }

  return (
    <div class="kintoneplugin-dropdown-list">
      {
        props.options.map((item,index)=> {
          return !isSelected(item[props.valueField]) && (
            <div class="kintoneplugin-dropdown-list-item"  key={index} onClick={()=> {handleSelect(item)}}>
              <span class="kintoneplugin-dropdown-list-item-name">{item[props.labelField]}</span>
            </div>)
        })
      }
    </div>
  )
}
export default SelectMenu;
