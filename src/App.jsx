
 import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "../pages/layout";
import Home from "../pages/home";
 const App=()=>{
  return(
    <>
   <BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;