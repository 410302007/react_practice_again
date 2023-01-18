import {useState} from 'react'
import './Menu.css'

function Menu() {
  //以點按到的選單項目文字作為state
  const[activeText, setActiveText]= useState('')
  
  const menuItem = ['首頁','關於我們','產品']

  return (
    <>
      <ul>
      {menuItem.map((v,i)=>{
        return (
        <li 
        key={i}
        onClick={()=>{
            setActiveText(v)
          }}>
          <a href="#/" className={activeText === v ? "active" : ''} >{v}</a>
        </li>
        )
      })}
      </ul>
    </>
  )
}

export default Menu
