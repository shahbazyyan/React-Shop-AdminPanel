import React, { useContext } from 'react';
import './Css/Shopcategory.css';
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assets/dropdown_icon.png';
import all_product from '../Components/Assets/all_product';
import Item from '../Components/Items/Item';

function ShopCategory(props) {
  
  const {all_product} = useContext(ShopContext)

  return (
    <div className='shop-category'>
       <img className='shopcategory-banner' src={props.banner} alt="" />
       <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt="dropdown" />
        </div>
       </div>
       <div className="shopcategory-products">
          {all_product.map((item,i) => {
             if(props.category === item.category) {
             return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
             } else {
              return null;
             }
          })};
       </div>
    </div>
  )
}

export default ShopCategory