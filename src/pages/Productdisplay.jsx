import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const ProductDisplay=()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});
    const loadData=async()=>{
        let api=`http://localhost:3000/electronics/${id}`;
         const response = await axios.get(api);
         console.log(response.data);
         setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    }, []);

    return(
        <>
        <center>
        <div className="product">
        <div style={{width:"600px", margin:"auto"}}>
         <h1 className="heading"> My Product</h1>
         <h2>Product name :<h4>{mydata.Name}</h4> </h2>
         
         <h4>category :  {mydata.category}</h4>
         <img src={mydata.image} width="300" height="300" />
          <h4> Price : {mydata.price}</h4>
         </div>
         </div>
         </center>
        </>
    )
}
export default ProductDisplay;