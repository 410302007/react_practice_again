import { useEffect, useState } from 'react';

function Counter() {
  // const [total, setTotal] = useState(0);
  // const [totalTwo, setTotalTwo] = useState(total + 1); //totalTwo只能作為初始化用，一開始只會執行一次，之後並不會再呼叫
  const [totalA, setTotalA] = useState(0);
  const [totalB, setTotalB] = useState(0);
  const [totalC, setTotalC] = useState(0);
  // A -> B -> C

  //模擬生命週期方法
  useEffect(() => {
    setTotalB(totalA + 1);
  }, [totalA]);

  useEffect(() => {
    setTotalC(totalB + 1);
  }, [totalB]);

  return (
    <>
      <h1
        onClick={() => {
          setTotalA(totalA + 1); //呼叫要變動狀態的方法
        }}
      >
        {totalA}
      </h1>
      <h1>{totalB}</h1>
      <h1>{totalC}</h1>
    </>
  );
}

export default Counter;
