import React, { Component } from 'react'
import './search-box.css' 



export const SearchBox = (props) => {
    return (
        <input
        className='search'
        type="search"
        placeholder={props.placeholder}
        onChange={props.onchange}
      />
    );
  };