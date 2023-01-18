import { useState } from 'react';
function Counter(){
   //宣告狀態用語法
   const [total, setTotal] = useState(0);
   return (
     <>
       <h1
         onClick={() => {
           //total++  相當於 total+=1
           setTotal(total + 1);
         }}
       >
         {total}
       </h1>
     </>
   );
}

export default Counter