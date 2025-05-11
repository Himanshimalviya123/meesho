
 import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "../pages/layout";
import Home from "../pages/home";
import ProductDisplay from "../pages/ProductDisplay";
import Search from "../pages/Search";

 const App=()=>{
  return(
    <>
   <BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>

    <Route path="home" element={<Home/>}/>
    <Route path="ProductDisplay" element={<ProductDisplay/>}/>
    <Route path="Search" element={<Search/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;