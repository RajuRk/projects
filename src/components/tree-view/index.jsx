import React from 'react';
import MenuList from './MenuList';

export default function index({menus = []}) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus}/>
    </div>
  )
}
