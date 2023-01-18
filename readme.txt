constant variable -> const

variable -> let / const

immutable object 不可變物件-> 當物件被創造出來，他的狀態(成員變數與屬性的值)就不可改變-> 狀態為只讀不寫 

使用map才需要使用key ; 其他情況不要使用key

JSX語法:
  1. || 邏輯或 / && 邏輯與
  2. || (OR)-> false;  &&(AND)-> true
    (1) 0 || '' || false || NaN || [] || null ||    undefined =>[](為真) 
        -> 使用falsy判斷(短路求值，從左到右判斷)，求到真就結束
    (2)1 && [] && 'abc' && {} && null && true ||undefined => undefined
  3. if/ if, else無法使用於語法中

----------------------
setState -> 1.唯⼀能更動 State(狀態) 的⽅法
            2. 更動網⾴上的UI -> State(狀態) 需要被改變 -> 要呼叫 setState ⽅法
            3.ex: <h1 onClick={() => setState(total +1)}>{total}></h1>


----------------------
props:
  1.三種基本關係:(參考3.props-2 & 3-1.props-2 & 3-2.props-2)
    (1).Parent 傳送資料給Child (單向資料流)
    (2).子女元件可透過props接收到由父母元件傳遞來的各種資料 (c->p)
    (3).子女-> 利用父母元件 及前面兩種方式(參考: 3-2.props-2)
  2.父母的屬性對子女來說是唯讀的(子女不能修改從父母元件得到的props屬性值)


----------------------
補充:
  (專題): 訂單編號: uuid  OR nanoid OR 資料庫
  !! typeof null -> object
  1. ref / key => 不屬於props
     ref 藉由 forwardRef 傳送  
  2.button type-> 預設為submit (送出)
  3.input type='file' 檔案(不可控) 
  4.map()->  React必用
    何時不要使用map():
     (1)不使用回傳的新陣列
     (2)或/且不需要回傳的新陣列
  5. indexOf 與 findIndex的差別: 
      indexOf() ->只能找到一般的值，陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。
      findIndex(放函式) ->較為彈性，尋找陣列中符合的元素，如果沒有符合的對象，將返回 -1
  6. boolean / null / undefined -> render時 不呈現
  7. 若要使用邏輯與 && /邏輯或 || -> 要先將前面的元素變成Boolean值(加!! or 大於 / 小於 / 不等於 / 等於)
  8. !! state(狀態)的資料類型雖為物件，但在函式型元件可不用為物件(可為數字/字串/boolean值..)，但在類比型元件一定      為物件!!
  9.  props(屬性)的資料類型一定為物件
  10. react的元件 為純函式
  11. useEffect不可在return & if 呼叫
  12. 只有
      1.setState(自己狀態)改變  
      2.從父母元件接收到新屬性時 
      => 才會觸發更新階段(didUpdate)

  13.
  useEffect(相依性陣列): 
  (1)相依性陣列中放入陣列或物件，只要有設定到state就一定會執行 
  (2)使用object.is()比較
  
  14.不可控表單->沒有與狀態連在一起

----------------------
truthy/ falsy :
 **falsy-> 強制轉型為boolean值，回傳false:
           1.false  2.""  3. 0  4. -0  
           5.NaN  6.null  7.undefined
----------------------
useLayoutEffect:
  1.執行時間點為: 在瀏覽器重繪(painting)前
  2.較useEffect執行時間早
  3.componentDidUpdate與useLayoutEffect執行時間點一致


----------------------
filter(過濾)->
  產生新陣列，與原陣列結構不同
map ->無法改變陣列結構
