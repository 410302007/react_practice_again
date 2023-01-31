
function TodoItem({todo, toggleCompleted, deleteTodo}) {  //v代表todo(代辦事項)
//可以先解構物件todo, 方便在下面使用todo.id, todo.text...
  const {id, completed, text} = todo
  return (
    <>
       <li className={completed ? 'completed' : 'active'} >
          <input 
          type="checkbox" 
          checked={completed} 
          onChange={() => {
            toggleCompleted(id)
          }}   
          />
          {text}
          <button onClick={(e)=>{
            deleteTodo(id)
          }}>刪除</button>
          </li>
    </>
  )
}
export default TodoItem
