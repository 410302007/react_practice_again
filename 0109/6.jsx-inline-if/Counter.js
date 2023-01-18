import { useState } from 'react';
function Counter(){
   //宣告狀態用語法
   const [total, setTotal] = useState(0);
   //只有setTotal才可更動狀態

  // const[username, setUsername] = useState('');      唯一能夠更動username -> 狀態改變-> setUsername
  // const[password, setPassword] = useState('');      唯一能夠更動密碼-> 狀態改變-> setPassword
   return (
     <>
       <h1
         onClick={() => {
           setTotal(total + 1);
         }}
       >
         {total}
       </h1>
        {/* {前面的條件運算要轉為boolean，不要使用falsy 或 truthy判斷*/}
       {!!total && <p>目前total ={total}</p>}
       {total > 0 && <p>目前total ={total}</p>}
       {/* 只用falsy或truthy判斷，會呈現多餘的數字 0 */}
       {total != 0 && <p>目前total ={total}</p>}
     </>
   );
}

export default Counter