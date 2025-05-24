import Carousel from 'react-bootstrap/Carousel';

import b1 from "../images/couresol1.webp";
import b2 from "../images/courosel2.webp";
import b3 from "../images/courosel3.webp";

import b5 from "../images/micro6.webp";

import { useState, useEffect } from 'react';
// import BackendURL from "../config/backendUrl";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { addToCart } from './cartslice';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
const Home=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const loadData=async()=>{
    
    const response = await axios.get("http://localhost:3000/electronics");
    console.log(response.data);
    setMydata(response.data);
 }

 useEffect(()=>{
    loadData();
 }, []);

 const ans=mydata.map((key)=>{
    return(
        <>
     <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={key.image}
            style={{cursor:"pointer"}} onClick={()=>{navigate(`/prodisplay/${key.id}`)}} />

      <Card.Body>
        <Card.Title> {key.Name} </Card.Title><br/>
        <Card.Text>
            Category:{key.category}<br/>
         Price : {key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addToCart({id:key.id, Name:key.Name, category:key.category,  image:key.image,qnty:1,  price:key.price}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
        
        </>
    )
 })







    return(
        <>

             <Carousel>
      <Carousel.Item>
         <img src={b1} width="100%" height="400" />
        
           
        </Carousel.Item>
      <Carousel.Item>
      <img src={b2} width="100%" height="400" />
        </Carousel.Item>
      <Carousel.Item>
      <img src={b3} width="100%" height="400" />
        </Carousel.Item>
      
        <Carousel.Item>
          <img src={b5} width="100%" height="400" />
        </Carousel.Item>
         
           
    </Carousel>   
    
<h1 className="heading"> Our Latest Products</h1>
      <div id='cardData'>
      {ans} 
      </div>
        </>
    )
}

export default Home;