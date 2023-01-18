 import {useState} from 'react'
 import ChildA from './ChildA'
 import ChildB from './ChildB'

function Parent(){
  //父母中的內部資料
  // const {pData, setPData}= useState('parent data')

  //原本為:準備接收來自子女B的資料->變為父母內部無資料，子女b將自己內部資料給父母，父母再傳給子女A
  const [dataFromChild, setDataFromChild]= useState('')

  return <>
    <h1>Parent</h1>
    <p>來自子女B的資料:{datFromChild}</p>
    <ChildA dataFromChild={dataFromChild} />
    {/*給子女B可以設定狀態(state)的函式 */}
    <ChildB setDataFromChild={setDataFromChild}/>
  </>
}
export default Parent 