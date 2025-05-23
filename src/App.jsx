import { BrowserRouter,Routes,Route } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Search from "./pages/search";
import ProductDisplay from "./pages/Productdisplay";
import AirConditioner from "./pages/ac";
import Smartphone from "./pages/smartphone";
import Microwave from "./pages/microwave";
import Waterpurify from "./pages/waterpurify";
import MyCart from "./pages/mycartslice";
import { ToastContainer, toast } from 'react-toastify';














const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>      
     <Route path="home" element={<Home/>}/>    
     <Route path="search" element={<Search/>}/>
     <Route path="ac" element={<AirConditioner/>}/>
     <Route path="smartphone" element={<Smartphone/>}/>
     <Route path="microwave" element={<Microwave/>}/>
          <Route path="waterpurify" element={<Waterpurify/>}/>
<Route path="mycartslice" element={<MyCart/>}/>
          <Route path="prodisplay/:id" element={<ProductDisplay/>}/>
     
        </Route>
      </Routes>
    </BrowserRouter>
     <ToastContainer />
    </>
  )
}

export default App;
