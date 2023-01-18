import Child from "./Child"
//渲染子女前，要先將子女引進

function Parent(){
  return (
  <>
    <Child
      text="Hello你好" 
      color="red"
      price={123}
      flag={true}
      foo={()=>{alert('hello')}}
      />
  </>
  )
}
export default Parent