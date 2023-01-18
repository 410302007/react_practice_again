import Products from './5.practice/data/Products.json';
import './ProductTable.css';

function ProductTable(){
  return <>
    <h1>Map展示</h1>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>ID</th>
      <th>圖片</th>
      <th>名稱</th>
      <th>價格</th>
    </tr>
  </thead>
  <tbody>
  {Products.map((v,i)=>{
    return (
      <tr key={v.id}>
      <td>{v.id}</td>
      <td>
        <img src={v.picture} alt="" />
      </td>
      <td>{v.name}</td>
      <td>{v.price}</td>
    </tr>
    )
  })}
  </tbody>
</table>
  </>
}
export default ProductTable