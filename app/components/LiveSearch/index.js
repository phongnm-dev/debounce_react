import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import SelectMenu from './SelectMenu';
import './kintone.css'
import './index.css'

function LiveSearch(props) {
  const [valueItem, setValueItem] = useState(createValueItem);
  const [getQuery, setQuery] = useState(props.query || '')

  function createValueItem() {
    let valueItemTemp = []
    if(props.multiple) {
      props.value.forEach((value) => {
        valueItemTemp = [...getOptions.filter((option) => option[props.valueField] === value)];
      })
      return valueItemTemp;
    }
    return valueItemTemp = '';
  };

  useEffect(() => {
    console.log('run0')
    const valueItemTemp = createValueItem()
    console.log(valueItem, '3')
    setValueItem(valueItemTemp)
  }, [props.value])

  useEffect(() => {
    alert(valueItem)
  }, [valueItem])

  function handleKeyInput(query) {
    setQuery(query);
  }

  useEffect(() => {
    setQuery(props.query)
  }, [props.query])

  useEffect(() => {
    props.onSearch && props.onSearch(getQuery);
  }, [getQuery])

  function handleSelect(selectedItem) {
    let valueItemTemp;
    if (props.multiple) {
      const isSelected = valueItem.findIndex((item) => item[props.valueField] === selectedItem[props.valueField]) !== -1;
      if(isSelected) return;
      valueItemTemp = [...valueItem, selectedItem]
      setValueItem(valueItemTemp);
      console.log(valueItem, '1')
      props.onSelect && props.onSelect(valueItemTemp.map((item) => { return item[props.valueField]}))
    } else {
      const isSelected = valueItem ? selectedItem[props.valueField] === valueItem[props.valueField]  : false;
      if(isSelected) return;
      valueItemTemp = selectedItem
      setValueItem(valueItemTemp)
      console.log(valueItem, '2')
      props.onSelect && props.onSelect(valueItemTemp[props.valueField])
    }
  }

  function handleClear() {
    // if (props.multiple) {
    //   setValueItem([]);
    //   return;
    // }
    // setValueItem('')
  }
  function caculateSearch() {
    return props.searching;
  }

  function handleRemove(removeItem) {
    // if (props.multiple) {
    //   setValueItem(valueItem.filter((item) => item[props.valueField] !== removeItem[props.valueField]))
    //   return
    // }
    // setValueItem('');
  }
  
  return (
    <div className={`search-container ${''}`}>
      <SearchInput value={getQuery} onKeyInput={handleKeyInput}/>
      {
        caculateSearch() && (<p>is searching...</p>)
      }
      {
        props.multiple && valueItem.map((item, index) => {
          return <div key={index}><p>{item[props.labelField]}</p><button onClick={() => {handleRemove(item)}}>x</button></div>
        })
      }
      {
        !props.multiple && valueItem && <div>{valueItem[props.labelField]}</div>
      }
      <SelectMenu handleRemove={handleRemove} options={props.options} handleSelect={handleSelect} labelField={props.labelField} valueField={props.valueField} valueItem={valueItem} multiple={props.multiple}/>
    </div>
  )
}
export default LiveSearch;
