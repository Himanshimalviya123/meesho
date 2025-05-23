
import Header from "../component/header";

import Footer from "../component/footer";
import { Outlet } from "react-router";

const Layout=()=>{
    return(
        <>
        <div id="topHeader"> 
        <Header/>
      
        </div>
         
             <Outlet/>
          <Footer/>
          

        </>
    )
}

export default Layout;