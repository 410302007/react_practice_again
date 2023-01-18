
function ChildA(props){
  //對子女A而言，他是無法改變從父母得到的資料
  //父母的資料對A是唯讀的
  // props.dataFromChild ='123'
  return <>
    <h1>Child-A</h1>
    <p>來自子女B的資料: {props.pData}</p>
  </>
}
export default ChildA