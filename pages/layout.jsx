import { Outlet } from "react-router-dom";
import Header from "../component/header";
import Topmenu from "../component/topmenu";
import Footer from "../component/footer";


const Layout=()=>{
    return(
        <>
       <div id="topHeader"> 
        <Header/>
       <Topmenu/>
        </div>
         
             <Outlet/>
          <Footer/>
          
        </>
    )
}
export default Layout;