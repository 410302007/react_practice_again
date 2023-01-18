 function Login(){
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')
  return <>
    <h1>會員登入範例</h1>
    <div>
      帳號:<input name="username" type="text" value={username} onChange={(e)=>{setUsername(e.target.value)
      {/* //假如要和伺服器檢查
      //在這裡面無法依賴狀態改變，不要將狀態當作React呈現在畫面上 */}
      console.log('username=',username)
      console.log('e.target.value=', e.target.value)
      }} />
    </div>
    <div>
      密碼:<input 
      name="password" 
      type="text"  
      value={password} 
      onChange={(e)=>{setPassword(e.target.value)
      //假如要檢查password
      //在這裡面無法依靠狀態改變，不要將狀態當作React呈現在畫面上 -> 加上e.target.value
      console.log('password.length=', password.length)
      console.log('e.target.value.length=', e.target.value.length)
      }} 
      />
      {password.length}
    </div>
    <button>登入</button>
  </>
 }
 export default Login