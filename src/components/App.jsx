// import { Component } from 'react';
import Counter from './Counter';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const App = () => {
  return (
    <>
      <Counter initialValue={0} />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
    </>
  );
};
