import React, { useContext } from 'react';
import './Productdisplay.css';
import stars from '../Assets/star_icon.png';
import dull_stars from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import ReactImageMagnify from 'react-image-magnify';


function ProductDisplay(props) {
    const {product} = props;
   
    
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
             <div className="productdisplay-img-list">
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
             </div>
             <div className="productdisplay-img">
                 <div id="imageMagnifyer">
                <ReactImageMagnify {...{
    smallImage: {
        alt: 'img',
        isFluidWidth: true,
        src: product.image,
    },
    largeImage: {
        src: product.image,
        width: 1600,
        height: 2000
    }
}} />
 </div>  
    </div>           
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={stars} alt="img" />
                <img src={stars} alt="img" />
                <img src={stars} alt="img" />
                <img src={stars} alt="img" />
                <img src={dull_stars} alt="img" />
                <p>(192)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aspernatur odio esse, iste minima nostrum quisquam eum dolore modi animi ipsa vitae possimus nulla.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {
                addToCart(product.id)
            }}>ADD TO CART</button>
            <p className="productdisplay-right-category">
                <span>Category :</span> Women, T-Shirt, Crop Top
            </p>
            <p className="productdisplay-right-category">
                <span>Tags :</span> Modern, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay