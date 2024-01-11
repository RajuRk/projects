import React from 'react'
import useLocalStorage from './useLocalStorage';
import "./theme.css";

export default function index() {

  const [theme, setTheme]= useLocalStorage('theme', 'dark');  
   
  const handletoggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
        <p>Hello World !</p>
        <button onClick={handletoggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}
