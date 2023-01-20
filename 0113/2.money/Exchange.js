import { useState } from 'react';

function Exchange() {
  //保持state的資料類型，在應用程式執行過程中一致
  const [inputTWD, setInputTWD] = useState(0);
  const [inputUSD, setInputUSD] = useState(0);

  const convertUSD2TWD = (money) => {
    //轉換後取小數點後2位
    return (money * 30.38).toFixed(2);
  };

  const converTWD2USD = (money) => {
    //轉換後取小數點後2位
    return (money / 30.38).toFixed(2);
  };

  return (
    <>
      <h1>貨幣轉換</h1>
      <div>
        <input
          type="number"
          //為了一開始不要呈現0，方便使用者輸入
          value={inputTWD === 0 ? '' : inputTWD}
          onChange={(e) => {
            //因e.target.value必為字串，為保持state的資料類型一致，要先轉換再設定
            const newInputTWD = Number(e.target.value);
            setInputTWD(newInputTWD);
            setInputUSD(converTWD2USD(newInputTWD));
          }}
        />
        <label>新台幣</label>
      </div>
      <div>
        <input
          type="number"
          //為了一開始不要呈現0，方便使用者輸入
          value={inputUSD === 0 ? '' : inputUSD}
          onChange={(e) => {
            const newInputUSD = Number(e.target.value); //計算用
            setInputUSD(newInputUSD); //呈現畫面用
            //注意要用e.target.value的值，不能依賴到inputUSD最後更動的值
            //setInputUSD是異步的
            console.log(newInputUSD);
            setInputTWD(convertUSD2TWD(newInputUSD));
          }}
        />
        <label>美金</label>
      </div>
    </>
  );
}
export default Exchange;
