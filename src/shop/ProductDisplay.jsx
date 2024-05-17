import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quo odit voluptate delectus esse earum quibusdam, ipsum ex animi sit doloremque beatae rerum dolore ut eaque hic assumenda rem ratione Quis nam consequatur facere odit quibusdam natus neque mollitia deserunt quasi alias."
const ProductDisplay = ({item}) => {
    // console.log(item);
    const {name,id,price,seller,ratingsCount,quantity}=item;

    const [prequantity,setQuantity]=useState(quantity);
    const [coupon,setCoupon]=useState("");
    const[size,setSize]=useState("Select Size");
    const[color,setColor]=useState("Select Color");

    const handleSizeChange=(e)=>{
        setSize(e.target.value);
    }
    const handleColorChange=(e)=>{
        setColor(e.target.value);
    }
    const handleDecrease=()=>{
        if(prequantity>0)
        setQuantity(prequantity-1);
    }
    const handleIncrease=()=>{
        setQuantity(prequantity+1);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const product={
            id:id,
            img:item.img,
            name:name,
            price:price,
            quantity:prequantity,
            size:size,
            color:color,
            coupon:coupon
        }
        // console.log(product);
        const existingCart=JSON.parse(localStorage.getItem("cart"))||[]
        const existingProductIndex=existingCart.findIndex((item)=>item.id==id);
        if(existingProductIndex!==-1){
            existingCart[existingProductIndex].quantity+=prequantity;
        }
        else{
            existingCart.push(product);
        }
        //update local stoarge
        localStorage.setItem("cart",JSON.stringify(existingCart));

        //reset form fields
        setQuantity(1)
        setSize("Select Size")
        setColor("Select Color")
        setCoupon("")
    }
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star' style={{color:'gold'}}></i>
                <i className='icofont-star' style={{color:'gold'}}></i>
                <i className='icofont-star' style={{color:'gold'}}></i>
                <i className='icofont-star' style={{color:'gold'}}></i>
                <i className='icofont-star' style={{color:'gold'}}></i>
                <span>{ratingsCount} review</span>
            </p>
            <h4>{price} ₹</h4>
            <h6>{seller}</h6>
            <p>
                {desc}
            </p>
        </div>
        {/* cart components */}
        <div>
            <form onSubmit={handleSubmit}>
                {/* sizing */}
                <div className='select-product size'>
                    <select value={size} onChange={handleSizeChange}>
                        <option>Select Size</option>
                        <option value="SM">SM</option>
                        <option value="MD">MD</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                {/* color */}
                <div className='select-product color'>
                    <select value={color} onChange={handleColorChange}>
                        <option>Select Color</option>
                        <option value="SM">RED</option>
                        <option value="MD">PINK</option>
                        <option value="L">ASH</option>
                        <option value="XL">WHITE</option>
                        <option value="XXL">BLUE</option>
                    </select>
                </div>
                {/* cart plus minus */}
                <div className='cart-plus-minus'>
                    <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                    <input className='cart-plus-minus-box' type="text" name="qtybutton" value={prequantity} onChange={(e)=>setQuantity(parseInt(e.target.value,10))}/>
                    <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                </div>
                {/* coupon field */}
                <div className='discount-code mb-2'>
                    <input type="text" placeholder='Enter Discount Code' onChange={(e=>setCoupon(e.target.value))} />
                </div>
                {/* btn section */}
                <div className='d-flex justify-content-between'>
                <button type='submit' className='lab-btn'><span>Add To Cart</span></button>
                <Link to="/cart-page" className='lab-btn bg-primary'>
                    <span>Check Out</span>
                </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay