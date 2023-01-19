import {useState} from 'react'

function HTML5Form(){
  //input-text
  const [inputText, setInputText]= useState('')
  return (
  <>
  <h1>可控的表單元件範例</h1>
    <section id="input-text"> 
    <h2>文字輸入框(input-text)</h2>  
    <input type="text" value={inputText} onChange={(e)=>{
      setInputText(e.target.value)
    }} />
    </section>
  </>
  )
}
export default HTML5Form