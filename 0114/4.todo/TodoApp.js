import { useState } from 'react';
import './TodoApp.css';
function TodoApp() {
  const [inputText, setInputText] = useState('');
  //每一個項目為物件 : `{id:1, text:'text', completed:false}`
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '買麵包', completed: true },
    { id: 3, text: '買飲料', completed: false },
  ]);

  //-------------------------------
  //reducer
  //獨立模組 
  //純粹函式，除了傳入參數外，不倚靠其他狀態，沒有用到外部變數
  const addTodoPure = (state, text)=>{
    return [
      {
      id:Number(new Date()),
      text:text,
      completed:false, //預設未完成
      },
      ...state,
    ]
  }
  //-----------------------------

  const addTodo =(text)=>{
    // id的選擇
    // 1. 單人使用應用，可用時間日期毫秒整數值，如`Number(new Date())`或`+new Date()`
    // 2. 用uuid或nanoid函式庫(需另外安裝npm)
    // 3. 使用資料庫的id產生機制
    // 4. 其它(例如數字遞增…)，如下範例
    // const ids = data.map((v) => v.id)
    // const maxId = Math.max(...ids)
    // const newId = maxId + 1
    // 先寫出新增的物件
     const newTodo={
      id:Number(new Date()),
      text:text,
      completed:false, //預設未完成
      }
    // 共通三步驟
    // 1. 從目前的狀態拷貝(ps.深拷貝/完全拷貝)出一個新的變數值(陣列/物件)
    // 2. 在新的變數值(陣列/物件)上作處理
    // 3. 設定回原本的狀態中
    //1 //2 //3
    setTodos([newTodo, ...todos])

    // 最短一行寫法
    // setTodos([
    //   {
    //     id: Number(new Date()),
    //     text: text,
    //     completed: false, //預設為未完成
    //   },
    //   ...todos,
    // ])
  }

  
  //傳入id，然後做completed屬性的boolean值切換
  const toggleCompleted = (id)=>{
// 1. 從目前的狀態拷貝(ps.深拷貝/完全拷貝)出一個新的變數值(陣列/物件)\
const newTodos = todos.map((v) => {
  return { ...v }
})

const index = todos.findIndex((v, i) => {
  return v.id === id
})

if (index !== -1) {
  // 2. 在新的變數值(陣列/物件)上作處理
  newTodos[index].completed = !newTodos[index].completed

  // 3. 設定回原本的狀態中
  setTodos(newTodos)
}

// 用map中判斷的語法，與上面同樣結果的寫法(寫法較好)
// const newTodos = todos.map((v2, i2) => {
//   if (id === v2.id)
//     return { ...v2, completed: !v2.completed }
//   else return { ...v2 }
// })
// setTodos(newTodos)

// // 最短一行寫法
// setTodos(
//   todos.map((v, i) =>
//     id === v.id ? { ...v, completed: !v.       completed } : { ...v }
//   )
// )
}


// 傳入id，刪除此項目
const deleteTodo = (id) => {
//1, 2
const newTodos = todos.filter((v, i) => {
  return v.id !== id
})

//3
setTodos(newTodos)

// 最短一行寫法
//setTodos(todos.filter((v, i) => v.id !== id))
}

  return (
    <>
      <h1>待辦事項</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            //新增todo
            addTodo(e.target.value)
            //清空文字輸入框
            setInputText('');
          }
        }}
      />
      <hr />
      <ul>
        {/* !!不可!!用索引值當key，索引值在執行過程中會因為新增、刪除而改變 */}
        {todos.map((v, i) => {
          return( 
          <li key={v.id} className={v.completed ? 'completed' : 'active'} >
          <input 
          type="checkbox" 
          checked={v.completed} 
          onChange={() => {
            toggleCompleted(v.id)
          }}   
          />
          {v.text}
          <button onClick={(e)=>{
            deleteTodo(v.id)
          }}>刪除</button>
          </li>
          )
        })}
      </ul>
    </>
  );
}
export default TodoApp;
