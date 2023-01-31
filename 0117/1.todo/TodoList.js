//在傳入參數時解構props
function TodoList({todos, toggleCompleted,deleteTodo}) {
  return <>
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
}
export default TodoList