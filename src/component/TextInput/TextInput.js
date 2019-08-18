import React from 'react';
import './text_input.css';

const TextInput = () => {
  return (
    <textarea
    maxLength={200}
    placeholder={'Start your religion...'}
  />
  )
}

export default TextInput;
