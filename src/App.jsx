import React from 'react'
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more-button';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data.js';
import Qrcode from './components/qr-code';
import LightDark from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';

function App() {

  return (
    <>
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStarts={10} /> */}
      {/* <ImageSlider 
        url={"https://picsum.photos/v2/list"} 
        page={"1"} 
        limit={"10"}
      /> */}
      {/* <LoadMore/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <Qrcode/> */}
      {/* <LightDark/> */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
    </>
  )
}

export default App
