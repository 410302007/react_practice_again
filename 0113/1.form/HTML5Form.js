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
  </>
  )
}
export default HTML5Form