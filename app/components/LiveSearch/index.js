import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import SelectMenu from './SelectMenu';
import './kintone.css'
import './index.css'

function LiveSearch(props) {

  function handleClickItem(itemValue, isSelect) {
    let value
    if (props.multiple) {
      value = isSelect ? [...props.value, itemValue] : props.value.filter((value) => value !== itemValue)
    } else {
      value = itemValue
    }
    props.onChange && props.onChange(value)
  }

  return (
    <div className={`search-container ${''}`}>
      <SearchInput value={props.query} onKeyInput={props.onSearch}/>
      <SelectMenu
        options={props.options}
        handleClickItem={handleClickItem}
        labelField={props.labelField}
        valueField={props.valueField}
        value={props.value}
        multiple={props.multiple}/>
    </div>
  )
}
export default LiveSearch;
