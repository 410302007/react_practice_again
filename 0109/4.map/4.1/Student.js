const data=[{
  id:1,
  name:'張小草',
},
{
  id:2,
  name:'陳小花'
},
]
function Student(){
  const aa =[1,2,3]
  
  //ab =[<li>1</li>,<li>2</li>,<li>3</li>]
  const ab = aa.map((v,i)=>{  
    return <li>{v}</li>
  })
  return <>
    <h1>學生資料範例</h1>
    <ul>
    {/* key值的選擇
            1. 資料來自資料庫，優先使用資料庫中的key(主鍵/外鍵)當key值
            2. 資料並非來自資料庫，可在資料初始化時使用uuid或nanoid等函式庫產生key值，注意*不要*寫在元件的return(即render)中
            3. 資料為靜態資料(意指在應用程式執行中完全不會更動)時，才能使用索引值當key值
         */}
        {/* {只有陣列可以呼叫map(map為api)} */} 
    {data.map((v,i)=>{
      return <li key={v.id}>{v.name}</li>
    })}
    </ul>
  </>
}
export default Student