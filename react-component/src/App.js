import axios from "axios";
import "./App.css";
import React,{useState, useEffect} from "react";

function App() {
  const [veri,setVeri]=useState([]);//veri değişkenine başlangıçta boş atandı
  useEffect(()=>{   // veri alma, işleme, depolama veya başka bir işlevi gerçekleştirmek için,Component içindeki state, props gibi varlıklar render olduktan sonra tetiklenen bir fonksiyondur
    axios.get("/products.json") //veri çekmek için axios get 
    .then(res=> setVeri(res.data))//then başarılı olunca çalışır,res.data alınan veri, gelen veri res parametresi
  },[])

  return (
    <div className="card-container">
  {veri.map(item => (
    <div key={item.id} className="card">
      <img src={item.productPic} alt={item.productName} />
      <div className="card-info">
        <p className="product-name">{item.productName}</p>
        <div className="yazi">
        <p className="old-price">{item.oldPrice}</p>
        <p className="current-price">{item.currentPrice}</p>
      
      
          <p><i className="fa-solid fa-heart"></i></p>
          <p><i className="fa-solid fa-cart-shopping"></i></p>
           </div>
      </div>
    </div>
  ))}
</div>
  );
}

export default App;//export ile dışa aktarım yaptık, başka dosyada kullanmak için
