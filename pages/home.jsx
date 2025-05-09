import { useState,useEffect } from "react";

// import { useDispatch } from "react-redux";
import myimg from "../images/image1.webp";
import myimg11 from "../images/image2.webp";
import myimg1 from "../images/p1.webp";
import myimg2 from "../images/p2.webp";
import myimg3 from "../images/p3.webp";
import myimg4 from "../images/p4.webp";
import myimg5 from "../images/p5.webp";
import myimg6 from "../images/p6.webp";
import myimg7 from "../images/p7.webp";
import myimg8 from "../images/p8.webp";

import myimg9 from "../images/b1.webp";
import myimg10 from "../images/b2.webp";
import myimg111 from "../images/b3.webp";
import myimg12 from "../images/b4.webp";
import myimg13 from "../images/b5.webp";
import myimg14 from "../images/b6.webp";
import myimg15 from "../images/b7.webp";
import myimg16 from "../images/b8.webp";

import myimg17 from "../images/s1.webp";
import myimg18 from "../images/s2.webp";
import myimg19 from "../images/s3.webp";
import myimg20 from "../images/s4.webp";
import myimg21 from "../images/s5.webp";
import myimg22 from "../images/s7.webp";
import myimg23 from "../images/s8.webp";
import myimg24 from "../images/s9.webp";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Home=()=>{
const [mydata,setMydata]=useState([]);
// const dispatch=useDispatch();
const loadData=async()=>{
    const loaddata=await axios.get(`http://localhost:3000/product/?product=${id}`)
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
}
useEffect(()=>{
   loadData();
}, []);




    return(
        <>
  
            <div id="navdown">
                <div>Women Ethnic</div>
                <div>Women Western</div>
                <div>mens</div>
                <div>kids</div>
                <div>Home & Kitchen</div>
                <div>Beauty & Health</div>
                <div>Jewellery & Accessories</div>
                <div>Bags & Footwear</div>
                <div>electronics</div>

            </div>
            <img src={myimg} width="100%" height="400px" />
     <div id="next">
        <div className="nextdown">
        <div>7 Days Easy Return</div>
        <div>Cash on Delivery</div>
        <div>Lowest Prices</div>
        </div>
     </div>
     <div id="images">
<div><img src={myimg1} />
<h5>ethnic wear</h5></div>
<div><img src={myimg2}  />
<h5>western dressess</h5></div>
<div><img src={myimg3}  />
<h5>menswear</h5></div>
<div><img src={myimg4}  />
<h5>footwear</h5></div>
<div><img src={myimg5}  />
<h5>home decor</h5></div>
<div><img src={myimg6}  />
<h5>beauty</h5></div>
<div><img src={myimg7}  />
<h5>Accessories</h5></div>
<div><img src={myimg8}  />
<h5>grocery</h5></div>

     </div>
     <img src={myimg11} />
     <center><h1>Original Brands</h1></center>
     <div id="brands">
      

      <div><img src={myimg9}/></div>
      <div><img src={myimg10}/></div>
      <div><img src={myimg111}/></div>
      <div><img src={myimg12}/></div>
      <div><img src={myimg13}/></div>
      <div><img src={myimg14}/></div>
      <div><img src={myimg15}/></div>
      <div><img src={myimg16}/></div>
     </div>
     <marquee>
     <div id="brands-name">
     <div><img src={myimg17} width="150px" height="60px"/></div>
     <div><img src={myimg18} width="150px" height="60px"/></div>
     <div><img src={myimg19} width="150px" height="60px"/></div>
     <div><img src={myimg20} width="150px" height="60px"/></div>
     <div><img src={myimg21} width="150px" height="60px"/></div>
     <div><img src={myimg22} width="150px" height="60px"/></div>
     <div><img src={myimg23} width="150px" height="60px"/></div>
     <div><img src={myimg24} width="150px" height="60px"/></div>
     </div>
     </marquee>

     <h1>Products For You</h1>
<div id="card">
     <Card style={{ width: '18rem' }}>
<img src={myimg1} />   
   <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
<img src={myimg2} />   
   <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  
    <Card style={{ width: '18rem' }}>
<img src={myimg3} />   
   <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  
    <Card style={{ width: '18rem' }}>
<img src={myimg4} />   
   <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
<img src={myimg5} />   
   <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
<img src={myimg6} />   
   <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

   <Card style={{ width: '18rem' }}>
<img src={myimg7} />   
   <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
<img src={myimg8} />   
   <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
</>
    )
}
export default Home;