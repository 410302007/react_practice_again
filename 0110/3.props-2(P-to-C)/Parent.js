 import {useState} from 'react'
 import ChildA from './ChildA'
 import ChildB from './ChildB'

function Parent(){
  const {pData, setPData}= useState('parent data')
  return <>
    <h1>Parent</h1>
    <ChildA pData={pData} />
    <ChildB />
  </>
}
export default Parent 