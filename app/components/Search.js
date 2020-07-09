import React, { useState, useEffect } from 'react';
import './kintone.css';

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
function LiveSearch(props) {
  const [getSearch, setSearch] = useState("");

  function handleClickItem(item) {
    props.onSelect && props.onSelect(item)
  }

  function handleChangeSearch(event) {
    setSearch(event.target.value)
  }

  const handleSearch = debounce(function (search) {
    props.onSearch && props.onSearch(search)
    console.log(search)
  }, 2000);

  return (
    <div>
      <input
        type="text"
        value={getSearch}
        onChange={handleChangeSearch}
        onInput={(event) => {
          const search = event.target.value
          handleSearch(search)
        }}
      />
      <div className="kintoneplugin-dropdown-list">
        {
          props.options.map((item,index)=> {
            return (
              <div className="kintoneplugin-dropdown-list-item" key={index} onClick={()=> {handleClickItem(item)}}>
                <span
                  className={`kintoneplugin-dropdown-list-item-name`}
                >{item.label}</span>
              </div>)
          })
        }
      </div>
    </div>
  )
}
export default LiveSearch;
