import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const[count, setCount] = useState(0)
  const[products, setProducts]=useState([
    {
      id:"1",
      img:"https://www.danielwellington.com/product-images/dw00100231_petite_st-jeO78gfr.png",
      name:"Petite St Mawes",
      price:"$200",
      button:false
    },
    {
      id:"2",
      img:"https://staticimg.titan.co.in/Titan/Catalog/1585SL07_1.jpg?impolicy=pqmed&imwidth=640",
      name:"Titan White Dial",
      price:"$180.00",
      button:false
    },
    {
      id:"3",
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_PF+watch-45-alum-midnight-nc-8s_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1632171068000,1661969013298",
      name:"Apple series 8 GPS",
      price:"$400.00",
      button:false
    },
    {
      id:"4",
      img:"https://staticimg.titan.co.in/Fastrack/Catalog/38074AP01_1.jpg",
      name:"Fastrack",
      price:"$300.00",
      button:false
    },
    {
      id:"5",
      img:"https://m.media-amazon.com/images/I/61hVGtfIXGL._SY355_.jpg",
      name:"boAt",
      price:"$170.00",
      button:false
    },
    {
      id:"6",
      img:"http://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_e305aecd-69d4-4d6d-a6ec-b3133676fc57.png?v=1646394745",
      name:"TRebel",
      price:"$300",
      button:false
    },
    {
      id:"7",
      img:"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-d/img/pc/huawei-watch-d-ecg-analysis.png",
      name:"Huawei",
      price:"$350",
      button:false
    },
    {
      id:"8",
      img:"https://www.hihonor.com/content/dam/honor/ae-en/product-list/wearables/honor-watch-gs-3/honor-watch-gs3-blue.png",
      name:"Honor Watch GS 3",
      price:"$280.00",
      button:false
    },
  ])

  const handleCart=(e)=>{
    //to toggle add to cart or remove from cart button
    let product = [...products]
    let index = product.findIndex((p)=> p.id === e.target.id )
    product[index].button = !products[index].button
    setProducts(product)

    //to change count in cart
    let cart = product.filter((p)=>p.button === true)
    setCount(cart.length)
  }
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        {/* <!-- Header--> */}
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        {/* <!-- Section--> */}
        <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {products.map((ele) => (
                        <div className="col mb-5" key={ele.id}>
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src={ele.img} alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">{ele.name}</h5>
                                        {/* <!-- Product price--> */}
                                        {ele.price}
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" id={ele.id} onClick={(e)=>handleCart(e)}>{ele.button?"Remove from cart":"Add to cart"}</a></div>
                                </div>
                            </div>
                        </div>
        ))}
                  </div>
                        </div>
            </section>
    
        {/* <!-- Footer--> */}
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
      </div>
  )}
export default App;
