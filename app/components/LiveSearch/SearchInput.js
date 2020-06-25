import React, { useState } from 'react';

function SearchInput({value, onKeyInput}) {
  const [getValue, setValue] = useState(value);

  return (
      <input
        type="text"
        value={getValue}
        onInput={(event) => {onKeyInput(event.target.value)}}
        onChange={(event) => {setValue(event.target.value)}}
      />
  )
}
export default SearchInput;
