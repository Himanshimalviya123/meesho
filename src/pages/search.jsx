import { useState, useEffect } from 'react';
// import BackendURL from "../config/backendUrl";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from './cartslice';
import { useDispatch } from 'react-redux';
const Search=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();
 const [product, setProduct] = useState("");


 const loadData=async()=>{
    const response = await axios.get("http://localhost:3000/electronics");
    console.log(response.data);
    setMydata(response.data);
 }
 useEffect(()=>{
    loadData();
 }, []);


const handleInput=(e)=>{
      let value= e.target.value;
      setProduct(value);
}







 const ans=mydata.map((key)=>{
     let myval= product.toLocaleLowerCase();
     let mystr= key.Name.toLocaleLowerCase();
   let status= mystr.includes(myval);
   
   if (status)
   {


    return(
        <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title> {key.Name} </Card.Title>
        <Card.Text>
         {/* Description :{key.description} */}
         Price : {key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, Category:key.Category,  image:key.image,qnty:1,  Price:key.Price}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>        
        </>
    )
   }  
 })

    return(
        <> 
      <h1 className='heading'>  See Our Latest Products</h1>
        
        <center>

       
        <h3>Enter Product Name : <input type="text" value={product}
        onChange={handleInput} /></h3>
       </center>
       <br /> <br /> <br />
      <div id='cardData'>
      {ans}
      </div>     
        </>
    )
}
export default Search;