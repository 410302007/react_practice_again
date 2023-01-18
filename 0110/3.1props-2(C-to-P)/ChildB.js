import { useState } from "react"

function ChildB(props){
  //子女中的內部資輛
  const {cData, setCData}= useState('child B data')
  return <>
     <h1>Child-B</h1>
     <button 
     onClick={()=>{
      //利用父母元件給的設定state的函式來傳值回父母元件
      props.setDataFromChild(cData)
     }}
     >傳送資料給父母</button>
  </>
}
export default ChildB