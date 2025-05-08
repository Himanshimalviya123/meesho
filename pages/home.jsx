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
const Home=()=>{
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
<img src={myimg1}  />
<img src={myimg2}  />
<img src={myimg3}  />
<img src={myimg4}  />
<img src={myimg5}  />
<img src={myimg6}  />
<img src={myimg7}  />
<img src={myimg8}  />


     </div>
     <img src={myimg11} />


</>
    )
}
export default Home;