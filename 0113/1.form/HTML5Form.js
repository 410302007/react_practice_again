import {useState} from 'react'

function HTML5Form(){
  //input-text
  const [inputText, setInputText]= useState('')

  //textarea
  const [textareaText, setTextareaText] = useState('');

  //radio-group
  //state中紀錄使用者選了單一值
  const [food, setFood] = useState(''); //state中紀錄使用者選了哪個值
  const foodOptions = ['排骨飯', '滷肉飯', '雞腿飯', '健康餐盒'];

  //checkbox_one
  //一開始預設為不同意
  const [agree, setAgree] = useState(false);

  //checkbox group - 第一種方法
  //state中藥記錄使用者選了哪幾個值(複選)
  const [likeList, setLikeList] = useState(['芒果']); //預設值為芒果
  const fruitOptions = ['芒果', '香蕉'];

  return (
  <>
  <h1>可控的表單元件範例</h1>
    <section id="input-text"> 
    <h2>文字輸入框(input-text)</h2>  
    <input type="text" value={inputText} onChange={(e)=>{
      setInputText(e.target.value)
    }} />
    </section>
    <section id="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value);
          }}
        />
      </section>
      <section id="radio-group">
        <h2>選項按鈕(radio-group)</h2>
        {foodOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                value={v}
                //boolean值，代表目前是否有被使用者使用
                checked={food === v}
                onChange={(e) => {
                  setFood(e.target.value);
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>
      <section id="checkbox-one">
        <h2>核取方塊(單一)(checkbox)</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked);
          }}
        />
        <label>我已閱讀並同意....</label>
      </section>
      <section id="checkbox-group">
        <h2>核取方塊(群組)(checkbox-group)</h2>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                checked={likeList.includes(v)}
                onChange={(e) => {
                  const targetValue = e.target.value;
                  //先判斷是否有在state(likeList)中
                  if (likeList.includes(targetValue)) {
                    //如果有在state陣列中->從state陣列中移除
                    //從陣列刪除這個值 = 回傳一個新陣列中不包含這個值
                    const newLikeList = likeList.filter((v2, i2) => {
                      return v2 !== targetValue;
                    });
                    setLikeList(newLikeList);
                  } else {
                    //如果沒有在state陣列中->加入到state陣列中
                    const newLikeList = [...likeList, targetValue];
                    setLikeList(newLikeList);
                  }
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>
  </>
  )
}
export default HTML5Form