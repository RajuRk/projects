import React,{useState} from 'react';
import './style.css';
import data from './data.js';

export default function index() {
    
    const [selected, setSelected] = useState(null);
    const [enableMultibleSelection,setEnableMultibleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        // console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    const handleMultiSelection = (getCurrentId) => {
       let cpyMultiple = [...multiple];
       const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
       //    console.log(findIndexOfCurrentId);
       if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
       else cpyMultiple.splice(findIndexOfCurrentId, 1);
    
       setMultiple(cpyMultiple);
    }

    console.log(selected, multiple);
   
    return (
    <div className="acc-wrapper">
        <button onClick={() => setEnableMultibleSelection(!enableMultibleSelection)}
        style={{backgroundColor: enableMultibleSelection ? "#bd8005" : "#614101"}}>Enable Multi Selection</button>
       <div className="accordion">
        {
            data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div className="item" key={dataItem.id} 
                     style={{backgroundColor: enableMultibleSelection ? "#bd8005" : "#614101"}}>
                        <div onClick={enableMultibleSelection 
                          ? () => handleMultiSelection(dataItem.id)
                          : () => handleSingleSelection(dataItem.id)} 
                            className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultibleSelection 
                            ? multiple.indexOf(dataItem.id) > -1 && (
                              <div className="acc-content">{dataItem.answer}</div>      
                            )
                            : selected === dataItem.id && (
                              <div className="acc-content">{dataItem.answer}</div>  
                            )
                        }
                        {/* {
                          selected === dataItem.id ||
                          multiple.indexOf(dataItem.id) !== -1 ? (
                          <div className="content">{dataItem.answer}</div>): null
                        } */}
                    </div>
                ))
            ):(
                <div>No data found</div>
            )
        }
       </div>
    </div>
  )
}
