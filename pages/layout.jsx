import { Outlet } from "react-router-dom";
import Topmenu from "../component/topmenu";
import Footer from "../component/footer";

const Layout=()=>{
    return(
        <>
        <Topmenu/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;