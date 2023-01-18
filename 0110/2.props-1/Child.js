
function Child(props){
  //先解構再使用
  const {text, color, foo}= props
  
  //在函式傳入值時就解構再使用
  //相同如下
  // function Child({text, color, foo}){

  //子女元件可透過props接收到由父母元件傳達來的各種資料
  // console.log(props)
  //{props.text} -> 呈現Hello你好在網頁上
  return <>
  <div>文字:{text}</div>
  {/* props.foo-> 按我-> 跳出alert */}
  <div>顏色:{color}</div>
  <button onClick={foo}>按我</button>
  </>
}
export default Child