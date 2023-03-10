import { useState } from 'react';

function MultipleInput() {
  //1. 保持state在應用程式執行過程中，資料類型一致(物件 -> 物件 -> 物件)
  //2. 當使用物件作為state時，初始值的選擇，除有特殊情況外，"不要"使用空物件 或 null
  //3. 物件中的初始值使用表單元素的名稱作為屬性名
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password1: '',
    password2: '',
    phone: '',
    showPassword1: false, //用於切換密碼欄位類型使用
    showPassword2: false, //用於切換密碼欄位類型使用
  });

  //處裡欄位變動
  const handleFieldChange = (e) => {
    //可利用下面觸發事件得到的值來做進一步處理
    // console.log(e.target.type, e.target.name, e.target.value, e.target.checked);

    //只針對checkbox(showPassword1)使用
    if (e.target.name === 'showPassword1') {
      setUser({ ...user, showPassword1: e.target.checked });
      return; //注意:這裡要跳出函式執行!
    }
    //只針對checkbox(showPassword2)使用
    if (e.target.name === 'showPassword2') {
      setUser({ ...user, showPassword2: e.target.checked });
      return; //注意:這裡要跳出函式執行!
    }

    //以下要依照通用的三步驟原則來更新狀態
    //1,2
    //ES6中新語法:computed property names(計算得來的屬性名稱)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newUser = { ...user, [e.target.name]: e.target.value };
    //3.
    setUser(newUser);
  };

  return (
    <>
      <h1>多個表單輸入共用處理函式</h1>
      <div>
        <label>姓名</label>
        <input
          type="text"
          name="fullname"
          value={user.fullname}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>信箱</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>密碼</label>
        <input
        //用showPassword的boolean值來切換文字輸入框類型
           type={user.showPassword1 ? 'text' : 'password'}
          name="password1"
          value={user.password1}
          onChange={handleFieldChange}
        />
         <br />
        <input
          type="checkbox"
          name="showPassword1"
          checked={user.showPassword1}
          onChange={handleFieldChange}
        />
        顯示輸入密碼
      </div>
      <div>
        <label>再次確認密碼</label>
        <input
          type={user.showPassword2 ? 'text' : 'password'}
          name="password2"
          value={user.password2}
          onChange={handleFieldChange}
        />
         <br />
        <input
          type="checkbox"
          name="showPassword2"
          checked={user.showPassword2}
          onChange={handleFieldChange}
        />
        顯示輸入密碼
      </div>
      <div>
        <label>電話</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleFieldChange}
        />
      </div>
    </>
  );
}
export default MultipleInput;
