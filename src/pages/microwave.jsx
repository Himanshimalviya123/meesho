import b2 from "../images/micro6.webp";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from './cartslice';
import { useDispatch } from 'react-redux';
const Microwave=()=>{
const [mydata, setMydata]= useState([]);
const dispatch = useDispatch();
const loadData=async()=>{
const response = await axios.get("http://localhost:3000/electronics/?category=microwave");
    console.log(response.data);
    setMydata(response.data);
 }
useEffect(()=>{
    loadData();
 }, []);
const ans=mydata.map((key)=>{
    return(
        <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title> {key.Name} </Card.Title>
        <Card.Text>
     Category:{key.category}<br/>

         Price : {key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addToCart({id:key.id, Name:key.Name,  category:key.category,  image:key.image,qnty:1,  price:key.price}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
        
        </>
    )
 })
  return(
        <>
<img src={b2} width="100%" height="350" />
<h1 className="heading">Our  Microwave</h1>
      <div id='cardData'>
      {ans}
      </div>
      </>
    )
}

export default Microwave;