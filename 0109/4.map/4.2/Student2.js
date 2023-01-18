// 導入一般的js資料格式使用
//import { data } from './data/students'

// 導入json檔案(應為文字檔)時，會自動轉為js的資料格式
import data from './data/students.json'

function Student() {
  return (
    <>
      <h1>學生資料範例-2(map)</h1>
      <ul>
        {/* key值的選擇
            1. 資料來自資料庫，優先使用資料庫中的key(主鍵/外鍵)當key值
            2. 資料並非來自資料庫，可在資料初始化時使用uuid或nanoid等函式庫產生key值，注意*不要*寫在元件的return(即render)中
            3. 資料為靜態資料(意指在應用程式執行中完全不會更動)時，才能使用索引值當key值
         */}
        {data.map((v, i) => {
          return (
            <li key={v.id}>
              {v.name} / {v.age} 歲
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Student;
