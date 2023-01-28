import { useState } from 'react';
function BirthdayForm() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  // 產生選項的函式，傳入最小值+最大值(包含)，回傳一個可以map用的數字陣列
  // 其它參考: https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  // https://stackoverflow.com/questions/10451893/javascript-create-simple-dynamic-array
  const makeOptions = (min, max) => {
    const options = [];

    for (let i = min; i < max + 1; i++) {
      options.push(i);
    }

    return options;
  };
  return (
    <>
      <h1>出生年月日下拉選單 + 18歲驗證</h1>
      <div>
        <label>西元</label>
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value);

            //為了避免再次選年or月，要先清空日的選擇state
            setDay('');
          }}
        >
          <option>-請選擇-</option>
          {makeOptions(1940, 2015).map((v, i) => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
        </select>
        年
        <select
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
            //為了避免再次選年or月，要先清空日的選擇state
            setDay('');
          }}
        >
          <option>-請選擇-</option>
          {makeOptions(1, 12).map((v, i) => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
        </select>
        月
        <select
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        >
          <option>-請選擇-</option>
          {/* if的條件render語法，true才能往後面執行 */}
          {/* `year!=='' && month !== ''` 可以只寫 `year && month`，因空白字串為falsy，而且也不會被渲染呈現 */}
          {year !== '' &&
            month !== '' &&
            makeOptions(1, new Date(year, month, 0).getDate()).map((v, i) => {
              return (
                <option key={v} value={v}>
                  {v}
                </option>
              );
            })}
        </select>
        日
      </div>
      <button
        onClick={() => {
          if (year === '' || month === '' || day === '') {
            alert('請完成年月日的完整選擇，才能進行驗證!');
            return;
          }
          //現在日期時間的毫秒值(從1970/1/1零時到目前)
          const msNow = Number(new Date());

          //使用者選的年月日毫秒值(從1970/1/1零時到使用者選擇的年月日)
          const msUser = Number(new Date(`${year}/${month}/${day}`));

          // 18年的毫秒值 = 18 * 365.25 * 24 * 60 * 60 * 1000 = 568036800000
          if (msNow - msUser >= 568036800000) {
            alert('滿18歲了!');
          } else {
            alert('未滿18歲!');
          }
        }}
      >
        驗證
      </button>
      <p>滿18歲了嗎?</p>
    </>
  );
}
export default BirthdayForm;
